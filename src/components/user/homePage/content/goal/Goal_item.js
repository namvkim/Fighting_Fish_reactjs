import React from 'react';
import PropTypes from 'prop-types';

GoalItem.propTypes = {
    content: PropTypes.string,
    img: PropTypes.string,
    box: PropTypes.string,
};

GoalItem.defaultProps = {
    content: '',
    img: '',
    box: '',
}

function GoalItem(props) {
    const { content, img, box } = props;
    return (
        <div className={"goal_item " + box}>
            <img src={img} alt="" />
            <div className="goal_item_content">{content}</div>
        </div>
    );
}

export default GoalItem;