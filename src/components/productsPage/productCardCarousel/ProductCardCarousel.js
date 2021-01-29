import Carousel from '../../carousel';
import ProductCard from '../productCard';
import React, { useEffect, useState } from 'react';

function ProductCardCarousel(props) {
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
    }, [cardDetails, category])
    
    if(filterData.length  === 0) {
        return null;
    }

    const sliderSetting = {
        dots: false,
        infinite: true,
        slidesToShow: filterData.length > 3 ? 3 : filterData.length,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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

    const renderSlides = () =>
        filterData.map(
            (productDetails, index) => (
                <div data-index={index} key={`ProductCard_${productDetails.id}`}>
                    <ProductCard {...productDetails} />
                </div>
            )
        )

    return (
        <div className="ProductCardCarousel">
            <Carousel renderSlides={renderSlides()} customSliderSetting={sliderSetting}></Carousel>
        </div>
    );
}

export default ProductCardCarousel;