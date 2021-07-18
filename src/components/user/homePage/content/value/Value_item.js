import React from 'react';
import PropTypes from 'prop-types';

Value_item.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
};

Value_item.defaultProps = {
    title: '',
    img: '',
}

function Value_item(props) {
    const { title, img } = props;
    return (
        <div className="value_item">
            {/* <div className="value_item_box">
                <img src={img} alt="" />
            </div> */}
            <div className="value_title">{title}</div>
        </div>
    );
}

export default Value_item;