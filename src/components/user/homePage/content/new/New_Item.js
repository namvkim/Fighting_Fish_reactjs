import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactReadMoreReadLess from "react-read-more-read-less";

New_Item.prototype = {
    img: PropTypes.string,
    title: PropTypes.string,
    introduce: PropTypes.string,
    like: PropTypes.number,
    comment: PropTypes.number,
    date: PropTypes.string,
}

New_Item.defaultProps = {
    img: '',
    title: '',
    introduce: '',
    like: 0,
    comment: 0,
    date: '',
}

function New_Item(props) {

    const { img, title, introduce, like, comment, date } = props;
    return (
        <div className="new_item_container">
            <Link to="#" >
                <div className="new_item_image" style={{ backgroundImage: img }}></div>
            </Link>
            <div className="new_item_title">
                <Link to="#" >{title}</Link>
            </div>
            <div className="new_item_introduce">
                <span className="new_item_text"> {introduce}</span>
                <Link to="#" className="new_read_more">Read More</Link>

            </div>
            <div className="new_item_interactive">
                <div className="interactive_item">
                    <div><i className="far fa-clock"></i></div>
                    <span>{date}</span>
                </div>
                <div className="interactive_item">
                    <div><i className="far fa-heart"></i></div>
                    <span>{like}</span>
                </div>
                <div className="interactive_item">
                    <div><i className="far fa-comment-alt"></i></div>
                    <span>{comment}</span>
                </div>
            </div>
        </div>
    );

}



export default New_Item;