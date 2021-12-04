import React from 'react';
import TV from '../../../image/tvjfif.jfif'
import TV2 from '../../../image/tv2.png'
import Head from '../../../image/images (1).jfif'
import Mbl from '../../../image/mbl.jpg'
import Mbl2 from '../../../image/mbl2.png'



const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide m-5" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                    <div class="text-center">
                                        <h6 class="text-6xl">SMART TV 4K</h6>
                                        <h6 class="text-6xl mt-3">QLED 75 INCH O7F</h6>
                                        <h3 class="text-3xl mt-3">Exclusive offer 24% off this week</h3>
                                        <button class="btn btn-primary mt-3">Shop Now</button>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <img src={TV} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                    <div class="text-center mb-5">
                                        <h6 class="text-6xl">SMART TV 4K</h6>
                                        <h6 class="text-6xl mt-3">QLED 75 INCH O7F</h6>
                                        <h3 class="text-3xl mt-3">Exclusive offer 24% off this week</h3>
                                        <button class="btn btn-primary mt-3">Shop Now</button>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <img src={Head} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 d-flex justify-content-center align-items-center">
                                    <div class="text-center">
                                        <h6 class="text-6xl">SMART TV 4K</h6>
                                        <h6 class="text-6xl mt-3">QLED 75 INCH O7F</h6>
                                        <h3 class="text-3xl mt-3">Exclusive offer 24% off this week</h3>
                                        <button class="btn btn-primary mt-3">Shop Now</button>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <img src={Mbl2} class="d-block w-100" alt="..." />
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
        </div>
    );
};

export default Carousel;