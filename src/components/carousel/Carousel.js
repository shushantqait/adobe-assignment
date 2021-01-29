import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeft from '@spectrum-icons/workflow/ChevronLeft';
import ChevronRight from '@spectrum-icons/workflow/ChevronRight';

const sliderSetting = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
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
    const className = props.type === "next" ? "Carousel__nextArrow Carousel__arrow" : "Carousel__prevArrow Carousel__arrow";

    return (
        <span className={className} onClick={props.onClick}>
            { (props.type === "next") ? <ChevronRight /> : <ChevronLeft /> }
        </span>
    );
}

function Carousel({ renderSlides, customSliderSetting }) {

    return (
        <div className="Carousel">
            <Slider
                { ...sliderSetting }
                { ...customSliderSetting }
                nextArrow={<Arrow type="next" />}
                prevArrow={<Arrow type="prev" />}
            >
                {renderSlides}
            </Slider>
        </div>
    );
}

export default Carousel;