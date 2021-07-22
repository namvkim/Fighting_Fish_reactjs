import React from 'react';
// import PropTypes from 'prop-types';

Banner.propTypes = {

};

function Banner(props) {
    return (
        <div className="banner_container" id="home">
            <div className="banner_content">

                <div className="banner_content_title">
                    Welcome to <span className="banner_content_title_span1">PNV</span>
                </div>
                <div className="banner_content_info">
                    Passerelles numériques Việt Nam là tổ chức phi chính phủ của Pháp thành lập năm 2010.
                </div>
                <div className="banner_content_subcribe">
                    <input className="banner_input form-control" type="text" placeholder="enter your email"></input>
                    <input type="button" className="banner_button_subcribe" value="Subcribe"></input>
                </div>
                <div className="banner_button">
                    <input type="button" className="banner_button_enroll" value="Enrollment" data-bs-toggle="modal" data-bs-target="#banner_model"></input>

                    <a
                        href="https://youtu.be/WUOxMDu-9zM"
                        className="glightbox banner_button_watch"
                    >
                        <i className='bx bx-caret-right-circle'></i>
                        <div>Watch Video</div>
                    </a>
                </div>
                <div className="modal fade" id="banner_model" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Fill in enrollment information</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" name="name" className="form-control mb-2" placeholder="Enter your name" />
                                <input type="text" name="phone" className="form-control mb-2" placeholder="Enter your phone" />
                                <input type="text" name="school" className="form-control mb-2" placeholder="Enter your school name" />
                                <input type="text" name="phone" className="form-control mb-2" placeholder="Enter your phone" />
                                <input type="text" name="birthDay" className="form-control mb-2" placeholder="Enter your birth day" />
                                <input type="file" name="img" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;