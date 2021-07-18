import React from 'react';
// import PropTypes from 'prop-types';
import Layout_homePage from '../layout/Layout_homePage';

Event.propTypes = {

};

function Event(props) {
    return (
        <Layout_homePage title="Our Event" id="event">
            <div className="multi-carousel px-3" data-items={3}>
                <div className="multi-carousel-inner timeline">
                    <div className="timeline__item-wrap-old multi-carousel-item">
                        <article className="timeline__item">
                            <div className="timeline__item-header">
                                <h5>Beginning, 2001</h5>
                            </div>
                            <div className="timeline__item-main">
                                <img src="assets/img/achievement/about-4-93x86.jpg" alt="" width="93" height="86" />
                                <p>
                                    We started to offer American companies top-notch marketing
                                    services.
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="timeline__item-wrap-even multi-carousel-item">
                        <article className="timeline__item">
                            <div className="timeline__item-header">
                                <h5>Beginning, 2002</h5>
                            </div>
                            <div className="timeline__item-main">
                                <img src="assets/img/achievement/about-4-93x86.jpg" alt="" width="93" height="86" />
                                <p>
                                    We started to offer American companies top-notch marketing
                                    services.
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="timeline__item-wrap-old multi-carousel-item">
                        <article className="timeline__item">
                            <div className="timeline__item-header">
                                <h5>Beginning, 2003</h5>
                            </div>
                            <div className="timeline__item-main">
                                <img src="assets/img/achievement/about-4-93x86.jpg" alt="" width="93" height="86" />
                                <p>
                                    We started to offer American companies top-notch marketing
                                    services.
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="timeline__item-wrap-even multi-carousel-item">
                        <article className="timeline__item">
                            <div className="timeline__item-header">
                                <h5>Beginning, 2004</h5>
                            </div>
                            <div className="timeline__item-main">
                                <img src="assets/img/achievement/about-4-93x86.jpg" alt="" width="93" height="86" />
                                <p>
                                    We started to offer American companies top-notch marketing
                                    services.
                                </p>
                            </div>
                        </article>
                    </div>

                </div>
                <a className="carousel-control-prev" tabIndex={0} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                </a>
                <a className="carousel-control-next" tabIndex={0} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                </a>
            </div>
        </Layout_homePage>
    );
}

export default Event;