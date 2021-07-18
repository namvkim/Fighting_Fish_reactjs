import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from "react-dom";
// import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from 'react-router-dom';


New_box_item.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    time: PropTypes.string,
    content: PropTypes.string,
};

New_box_item.defaultProps = {
    title: '',
    image: '',
    time: '',
    content: '',
}

function New_box_item(props) {
    const { title, image, time, content, children } = props;
    return (
        <div className="new_item_containers">


            <Link to="/new_detail" style ={{ color:'black'}}>
                <div >
                    <img className="item_image" src={image}
                        style={{ width: '320px', height: '180px' }} />
                </div>
            </Link>

            <div className="item_content_title">
                <Link to="/new_detail"  style ={{ color:'black'}}>

                    <div className="item_title">{title} </div>
                </Link>
                <div className="item_time">{time} </div>
                <div className="item_content" >
                {/* {content} */}
                   
                        <div className="item_readMore">
                        {content}
                            </div>
                              <Link to="/new_detail"  >
                                   <span className="item_readMore_button">Đọc thêm</span>    
                             </Link> 
                    {/* <ReactReadMoreReadLess
                        charLimit={160}
                        readMoreText={"Đọc thêm"}
                        // readLessText={"Ẩn bớt"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >
                        {content}
                    </ReactReadMoreReadLess> */}
                </div>
                <div className="item_margin"></div>
            </div>
        </div>
    );

}



export default New_box_item;