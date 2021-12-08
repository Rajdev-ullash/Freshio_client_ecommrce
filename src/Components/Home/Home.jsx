import React from 'react';
import Carousel from './Carousel/Carousel';
import HomeBanner from './HomeBanner/HomeBanner';
import HotDeals from './HotDeals/HotDeals';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <HomeBanner />
            <HotDeals />
        </div>
    );
};

export default Home;