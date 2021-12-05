import React from 'react';
import Carousel from './Carousel/Carousel';
import HomeBanner from './HomeBanner/HomeBanner';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <HomeBanner />
        </div>
    );
};

export default Home;