import React from 'react';
// import PropTypes from 'prop-types';
import Layout_homePage from '../layout/Layout_homePage';

Achievement.propTypes = {

};

function Achievement(props) {
    return (
        <Layout_homePage title="Student Achievement" id="achievement">
            <div className="achievement_container">
                <div className="shell">
                    {/* Tab panes*/}
                    <div className="layout-horizontal layout-horizontal_md-reverse">
                        <div className="layout-horizontal__main">
                            <div className="nav">
                                <button data-bs-toggle="tab" data-bs-target="#nav-home">Home</button>
                                <button data-bs-toggle="tab" data-bs-target="#nav-profile">Home</button>
                                <button data-bs-toggle="tab" data-bs-target="#nav-contact">Home</button>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="nav-home">1</div>
                                <div className="tab-pane fade" id="nav-profile">2</div>
                                <div className="tab-pane fade" id="nav-contact">3</div>
                            </div>

                        </div>
                        <div className="layout-horizontal__aside">
                            <div className="slick-slider-vertical">
                                <div className="slick-slider carousel-parent nav" id="parent-carousel-1" data-loop="true" data-dots="false" data-swipe="true" data-items={1} data-child="#child-carousel-1" data-for="#child-carousel-1">
                                    <div className="item" >
                                        <div className="slick-image">
                                            <img src="assets/img/achievement/services-1-565x401.jpg" alt="" width={565} height={401} />
                                        </div>
                                    </div>
                                    <div className="item" >
                                        <div className="slick-image">
                                            <img src="assets/img/achievement/services-2-565x401.jpg" alt="" width={565} height={401} />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-image">
                                            <img src="assets/img/achievement/services-3-565x401.jpg" alt="" width={565} height={401} />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-image">
                                            <img src="assets/img/achievement/services-4-565x401.jpg" alt="" width={565} height={401} />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-image">
                                            <img src="assets/img/achievement/services-5-565x401.jpg" alt="" width={565} height={401} />
                                        </div>
                                    </div>
                                </div>
                                <div className="slick-slider carousel-child" id="child-carousel-1" data-for="#parent-carousel-1" data-arrows="true" data-loop="true" data-dots="false" data-swipe="true" data-items={3} data-xs-items={3} data-sm-items={3} data-md-items={3} data-lg-items={3} data-slide-to-scroll={1} data-vertical="false" data-xs-vertical="false" data-sm-vertical="true" data-md-vertical="true" data-lg-vertical="true" data-center-mode="true">
                                    <div className="item">
                                        <div className="slick-slider__inner">
                                            <div className="slick-thumb">
                                                <img src="assets/img/achievement/services-1-565x401.jpg" alt="" width={565} height={401} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-slider__inner">
                                            <div className="slick-thumb">
                                                <img src="assets/img/achievement/services-2-565x401.jpg" alt="" width={565} height={401} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-slider__inner">
                                            <div className="slick-thumb">
                                                <img src="assets/img/achievement/services-3-565x401.jpg" alt="" width={565} height={401} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-slider__inner">
                                            <div className="slick-thumb">
                                                <img src="assets/img/achievement/services-4-565x401.jpg" alt="" width={565} height={401} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="slick-slider__inner">
                                            <div className="slick-thumb">
                                                <img src="assets/img/achievement/services-5-565x401.jpg" alt="" width={565} height={401} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout_homePage>
    );
}

export default Achievement;