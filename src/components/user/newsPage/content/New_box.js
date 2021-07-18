import React, { useState } from 'react';
import PropTypes from 'prop-types';
import New_box_item from './New_box_item';
import New_box_all from './New_box_all';
import New_box_main from './New_box._main';

New_box.propTypes = {
    title_left: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    time: PropTypes.string,
    content: PropTypes.string,
    id:PropTypes.string,
};

New_box.defaultProps = {
    title_left: '',
    title: '',
    image: '',
    time: '',
    content: '',
    id:''
}



function New_box(props) {

    const { id, title, image, time, content, title_left, children } = props;
    const [status, setStatus] = useState(1);

    function handleStatusClick() {
        setStatus(2);
    }
    return (
        <div id={id} >
            <div className="box_header">
                <div className="box_title">{title_left} </div>
                <div className="new_see_more"
                    onClick={handleStatusClick}
                >
                   <div>See more</div>
                   <div >
                   <img className="" src="https://img.flaticon.com/icons/png/512/25/25426.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                        style={{  height: '20px' }} />
                   </div>
                </div>
            </div>
            <hr className="hr" />
            {
                (status == 1) ?

                    <div className="box_content">
                        <New_box_main title={title} image={image} time={time} content={content} />
                        <div className="box_content_i">
                            <New_box_item id= "1" title={title} image={image} time={time} content={content} />
                            <New_box_item id= "2"title={title} image={image} time={time} content={content} />
                            <New_box_item id= "3"title={title} image={image} time={time} content={content} />
                        </div>
                    </div>
                    :
                    <New_box_all title={title} image={image} time={time} content={content} />
            }
        </div>
    );

}



export default New_box;