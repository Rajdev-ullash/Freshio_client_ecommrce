import React from 'react';

import Banner from '../../../image/banner1.jfif'
import Banner1 from '../../../image/banner2.jfif'
import Banner2 from '../../../image/banner3.jfif'
import Banner3 from '../../../image/banner4.jfif'

const HomeBanner = () => {
    return (
        <div>
            <div class="grey-bg container-fluid">
                <section id="minimal-statistics">
                    <div class="row">
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="align-self-center">
                                                <img src="data:image/png;base64,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" />
                                            </div>
                                            <div class="media-body pl-8">
                                                <h3>Free Delivery</h3>
                                                <span>For all order over $99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="align-self-center">
                                                <img src="data:image/png;base64,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" />
                                            </div>
                                            <div class="media-body pl-8">
                                                <h3>Safe Payment</h3>
                                                <span>100% secure payment</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="align-self-center">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAGn0lEQVR4nO2afWyUdx3AP9/nuR5tVVY3se1sN4G7AlZx6V2pEOO6DTdxyTYSgcy5Oc3YXYOBZGI0xrhqwoyOLYGt3JUZF9DFBEc6uywZC5FFnAR6lZBZtt1dqRskJS64YLu+3/P1j+eh6cu9Qo8UfD7Jpc/z/f2+r31+L88LuLi4uLi4uLi4uLj8PyKZGny7Ews+XcK3VLRJkUojS9+5QpEJRM+LcqTrvO81WsUqts+0STXsObPSMFIdwJJiB5CFmGmy/vhm/7liOplVgED76WrRkpNApSMaA4oaxCUUMQStBUxH1FMyVNp47Ina4WL59MwUGJb3JypaaQfEL0duHNvRs7F+rFgBzKRpd2JhystzwCNA/UT58OPArmL5M2YKLOE+5/Cv3WH/k1czeYDjW/3/Vbn4GNBnS+S+rApXyKwCCFoDIMrfi+k4G92h4DiixwFUuKWYvmYVAGdYKIwW03EuVI0R+6/MGqZzSVGNzwWC1gSjid40DRbKOVQOqlH+u+7QzUOXYz/dFTDf8GAvx9N/ig9oRvQ50Y/fWh1573OXa3y+MwD6x9liKQW+AtQBt41jvESr3lno5mneF0CRC91hfyhtY6sagapkVGAzwu3BqsSmGKQpVmauhSGQmVaxvEOl20D6bYHx5IYDamZXms61XQDg2BO1wyhP2We67MxHvd8pRP+aLwDA8E2je7m0cVJa6w/0ePPVvS4K4OxWdwAI+vnyjxY8mq/uvJ8EBfU07onnvCsVwzhqWdoPWq2qP/PtTuxLbvXn3MzN+wIANWrI7I3QDNSatvrVVnh5NRiNPx0L+Q8jopn0roshkIGvg7wRbE++HYzEQ80v9pWm63QtXAEXROSnhShYavkFeQyoAOoRiQ6MTvww0N67tju09IOpfed9ARQZiIV8ewvVq2/r+UWZx/tdVbYJ+AX8qPU8MO32OnMBDJY07o2vLTzkuUEtvflK9Hu21A8CbbRqJFjV+wfQB4Hmmf0yF0B5WFUevpIg5gWtYhFJxJ2Hf+Uzm6/nSTAvMl8Bwu9FdP9VjGUaasmPgLuL7SdzASzOdLXUHS52AJkIRJMPCRmX7znDHQKFKgTaT1eDd7lpUZEy9P2Lo/Tks+WcazYcULPvQjyAGLdYqiOmVRLr2rL4fKF28i5AQ1t8hZjsEJX7QQ1LQBQqvJwPtCd2far/3M43W++YKDSAQmluPeIZqK7d1vef5HbEqAIwRFBzgsZo4pCqbI+1+P6Zr728hkBjtPcuw5RjgqxPo1Mlyq8GK2s6V+4/9Yn8Uykc3+7EgsHKmk5R3QlUzWxXuAfRE8Fo7zfztZmuACm7RT0AKyPJzyrWAeAGwBLlt4KxVoWAqH4P6AFAWOcdKv91wVkVQIWXZxDWOadxFTZblgRV5E5RIk7sZWD9adodpJPLZG5TmPVuMBhNvAMsR/lQ4M8qfAloAhT0oVi4btozt9XPni0bLx95DbgDsIB9oONXnq40Yz/wdB6Kigk8iv3e8NhwauxuZ7c3SaA9+YCoHsT+x54E7RIVQ+F+hEUKp7rD/ttyFCD5COi+NBG9Egv716cLddUL7y62UmaSq7SqmFB/POw/na6tMZJ4SYVvp2lSYGMs7H95qnDWJBgL+/aviiQHLNHHgS8CNY76q5kCOrF5eV8gmnhb4MvAMNCfdzb5Uw2UAb2ZkgdApBPUKYC8J6KDqpyzlMg/WvyHZnZPuwqcaPF1AB0NbfEVhim2M9Gsr6gNGLa3LXokFq67N5+MCiEYTXQAD2AXOAs6+YbIILXpRGjZqWy9s16yo4yfBezxLLImU79Ae+8NCiud05xPby4LufS2mGWrnn/npkzdVOSrzmEqJZ5/5TKbtQA9W+oHBf5iW+b7DW3xFWljU+sZnDstMejM5fRyENVXnMMSy2M+la5PQ1vSh2rYPtM3u0NLL+a0m6tD497kGrX0KGAI/Btk69CNox09G+vHml5I1KRS7AQ22cbkaFfY97U8cyqYYDR+GOQu53R/asL8+ckfLHk/0B4rgYUbRGUX8BnAUjFu7w4t/Vsum3l9+NQYTW5X9OkpohGUAYRFU2RnTZM1xfymx/l85y1g8aRQ+RDhk9gTpCPTH8da6n6Tj828lq2usG+nM7Ne2muXTkte6JSUZ1WxP2jqDn2hP+WlCeHgFN+LmExe+lF5MN/kbfUCWP3s2bKJ8uF1KjSgLBSMD1R5vZC991wR3PPuMjGMb6jIraoMIHLS+/GCQ8X8oMrFxcXFxcXFxcXF5frhfx7BTCW+LTUZAAAAAElFTkSuQmCC" />
                                            </div>
                                            <div class="media-body pl-8">
                                                <h3>Shop with confidence</h3>
                                                <span>If goods have problem</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="media d-flex">
                                            <div class="align-self-center">
                                                <img src="data:image/png;base64,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" />
                                            </div>
                                            <div class="media-body pl-8">
                                                <h3>24/7 help center</h3>
                                                <span>Dedicated 24/7 support</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-md">
                        <img style={{width:"270px", height:"270px"}} src="http://junko.mallthemes.com/wp-content/uploads/2019/03/home1-banner1-1.jpg" class="sm:ml-11" alt="..." />
                    </div>
                    <div class="col-md-6">
                        <img style={{width:"570px", height:"270px"}} src="http://junko.mallthemes.com/wp-content/uploads/2019/03/home1-banner1-2.jpg" class="sm:ml-16" alt="..." />
                    </div>
                    <div class="col-md">
                        <img style={{width:"270px", height:"270px"}} src="http://junko.mallthemes.com/wp-content/uploads/2019/03/home1-banner1-3.jpg" class="sm:ml-7" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;