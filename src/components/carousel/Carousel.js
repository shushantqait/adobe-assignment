import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselMock from '../../mocks/carouselMock.json';
import ChevronLeft from '@spectrum-icons/workflow/ChevronLeft';
import ChevronRight from '@spectrum-icons/workflow/ChevronRight';
import {
    Grid,
    Text,
    View,
    Image,
    Heading,
    Tooltip,
    ActionButton,
    TooltipTrigger
} from "@adobe/react-spectrum";
import CarouselImage from "../../assets/card_image.jpg";

const sliderSetting = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 510,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

function Arrow(props) {
  let className = props.type === "next" ? "Carousel__nextArrow" : "Carousel__prevArrow";
  className += " Carousel__arrow";
  return (
    <span className={className} onClick={props.onClick}>
        { (props.type === "next") ? <ChevronRight /> : <ChevronLeft /> }
    </span>
  );
}

function Carousel() {
    const renderSlides = () =>
        CarouselMock.map(carouselLink => (
        <Grid
            areas={['header  header', 'footer  footer']}
            columns={['1fr']}
            rows={['200px', 'auto']}
            justifyContent="center"
            height="280px"
            gap="size-0"
            UNSAFE_className="grid-box mx-2"
            key={`carousel_slide_${carouselLink}`}
        >
            <View gridArea="header">
                <Image objectFit="fill" height="200px" src={CarouselImage} alt="Card Logo" />
            </View>
            <View backgroundColor="gray-50" gridArea="footer" UNSAFE_className="card-footer px-3 pt-3">
                <TooltipTrigger>
                    <ActionButton aria-label="Name" UNSAFE_className="border-0 Carousel__bg-white Carousel__display-grid">
                        <Heading level={6} UNSAFE_className="font-weight-bold Carousel__text-black">{carouselLink.title}</Heading>
                    </ActionButton>
                    <Tooltip>{carouselLink.title}</Tooltip>
                </TooltipTrigger>
                <Text UNSAFE_className="d-block">{carouselLink.publisher}</Text>
            </View>
        </Grid>
    ));

    return (
        <div className="Carousel">
            <Slider
                { ...sliderSetting }
                nextArrow={<Arrow type="next" />}
                prevArrow={<Arrow type="prev" />}
            >
                {renderSlides()}
            </Slider>
        </div>
    );
}

export default Carousel;