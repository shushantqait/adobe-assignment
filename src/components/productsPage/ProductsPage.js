import CardBox from '../cardBox';
import { useState } from 'react';
import Carousel from '../carousel';
import ProductList from './productList';
import Filter from '../containers/Filter';
import ProductCarousel from './productCarousel';
import { Grid, Button } from "@adobe/react-spectrum";
import CarouselImage from "../../assets/card_image.jpg";
import CarouselMock from '../../mocks/carouselMock.json';

function ProductPage({ cardDetails }) {
    const [buttonToggle, setButtonToggle] = useState(true);
    const handleChangeClick = () => {
        setButtonToggle(prevState => !prevState);
    }

    const renderSlides = () =>
        CarouselMock.map(carouselLink => (
            <CardBox key={`carousel_slide_${carouselLink}`} image={CarouselImage} children={<ProductCarousel carouselLink={carouselLink} />}></CardBox>
        )
    );

    return (
        <div className="ProductPage mx-4 mb-5 px-3">
            <Carousel renderSlides={renderSlides()}></Carousel>
            <Grid
                columns={['15%', '83%']}
                rows={['100%']}
                gap="3%"
                justifyContent="left"
                UNSAFE_className="ProductPage__grid-box"
            >
                {buttonToggle ? <Filter /> : ""}

                <Button variant="cta" marginBottom="20px" onClick={() => handleChangeClick()} UNSAFE_className="ProductPage__toggle-button">
                    {!buttonToggle ? 'Filter' : 'Done'}
                </Button>

                <div className="d-block">
                    <ProductList getCardDetails={cardDetails} />
                </div>
            </Grid>
        </div>
    )
}

export default ProductPage