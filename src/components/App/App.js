import React from 'react';
import Header from '../header';
import Banner from '../banner';
import Footer from '../footer';
import Carousel from '../carousel';
import ProductsPage from '../productsPage';

function App(props) {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Carousel />
            <ProductsPage />
            <Footer />
        </div>
    );
}

export default App;