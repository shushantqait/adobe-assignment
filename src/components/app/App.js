import React from 'react';
import Header from '../header';
import Banner from '../banner';
import Footer from '../footer';
import ProductsPage from '../containers/ProductsPage';

function App(props) {
    return (
        <div className="App">
            <Header />
            <Banner />
            <ProductsPage />
            <Footer />
        </div>
    );
}

export default App;