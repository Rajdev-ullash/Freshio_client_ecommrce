import React from 'react';
import TV from '../../../image/tvjfif.jfif'
import TV2 from '../../../image/tv2.png'
import Head from '../../../image/images (1).jfif'
import Mbl from '../../../image/mbl.jpg'
import Mbl2 from '../../../image/mbl2.png'

import './Carousel.css'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="mask flex-center">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-md-7 col-12 order-md-1 order-2">
                                        <h4>Present your <br />
                                            awesome product</h4>
                                        <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br />
                                            necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
                                        <a href="#">BUY NOW</a> </div>
                                    <div class="col-md-5 col-12 order-md-2 order-1"><img src="https://i.imgur.com/NKvkfTT.png" class="mx-auto" alt="slide" /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <div class="mask flex-center">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-md-7 col-12 order-md-1 order-2">
                                        <h4>Present your <br />
                                            awesome product</h4>
                                        <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br />
                                            necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
                                        <a href="#">BUY NOW</a> </div>
                                    <div class="col-md-5 col-12 order-md-2 order-1"><img src="https://i.imgur.com/duWgXRs.png" class="mx-auto" alt="slide" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="mask flex-center">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-md-7 col-12 order-md-1 order-2">
                                        <h4>Present your <br />
                                            awesome product</h4>
                                        <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br />
                                            necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
                                        <a href="#">BUY NOW</a> </div>
                                    <div class="col-md-5 col-12 order-md-2 order-1"><img src="https://i.imgur.com/DGkR4OQ.png" class="mx-auto" alt="slide" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    );
};

export default Carousel;