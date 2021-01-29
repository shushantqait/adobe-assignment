import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ProductCard from '../productCard';
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';
import ChevronLeft from '@spectrum-icons/workflow/ChevronLeft';
import ChevronRight from '@spectrum-icons/workflow/ChevronRight';

function Arrow(props) {
  let className = props.type === "next" ? "ProductCarousel__nextArrow" : "ProductCarousel__prevArrow";
  className += " ProductCarousel__arrow";
  return (
    <span className={className} onClick={props.onClick}>
        { (props.type === "next") ? <ChevronRight /> : <ChevronLeft /> }
    </span>
  );
}

function ProductCarousel(props) {
    const { cardDetails, category } = props;
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        let arr = [];
        cardDetails.map(productDetails => {
            return category.map(item => {
                if (productDetails.productNames.includes(item)) {
                    arr.push(productDetails);
                }

                return null;
            })
        });

        setFilterData(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    if(filterData.length  === 0) {
        return null;
    }

    const sliderSetting = {
        dots: false,
        infinite: true,
        slidesToShow: filterData.length > 3 ? 3 : filterData.length,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="ProductCarousel">
            <Slider
                { ...sliderSetting }
                nextArrow={<Arrow type="next" />}
                prevArrow={<Arrow type="prev" />}
            >
                {
                    filterData.map(
                        (productDetails, index) => (
                            <div data-index={index} key={`ProductCard_${productDetails.id}`}>
                                <ProductCard {...productDetails} />
                            </div>
                        )
                    )
                }
            </Slider>
        </div>
    );
}

export default ProductCarousel;