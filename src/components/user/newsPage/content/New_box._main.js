import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

New_box_main.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    time: PropTypes.string,
    content: PropTypes.string,
};

New_box_main.defaultProps = {
    title: '',
    image: '',
    time: '',
    content: '',
}
function New_box_main(props) {
    const { title, image, time, content, children } = props;
    return (
        <div className="new_main_container">
            <Link to="/new_detail" >
                <div  >
                    <img className="main_image" src={image}
                        style={{ width: '400px', height: '300px' }} />
                </div>
            </Link>

            <div className="main_content_title">
                <Link to="/new_detail" style ={{ color:'black'}} >
                    <div   className="main_title">{title} </div>
                </Link>
                <div className="main_time">{time} </div>
                <div className="main_content">{content} </div>
            </div>

        </div>
    );

}



export default New_box_main;