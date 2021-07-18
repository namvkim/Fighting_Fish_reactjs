import React from 'react';
// import PropTypes from 'prop-types';

Banner.propTypes = {

};

function Banner(props) {
    return (
        <div className="banner_container" id="home">
            <div className="banner_content">
                <div className="banner_content_left">
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
                        <input type="button" className="banner_button_enroll" value="Enrollment"></input>
                        <a
                            href="assets/video/videoplayback.mp4"
                            className="glightbox banner_button_watch"
                        >
                            <i className='bx bx-caret-right-circle'></i>
                            <div>Watch Video</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;