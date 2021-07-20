import React from 'react';
// import PropTypes from 'prop-types';
import Layout_homePage from '../layout/Layout_homePage';
import Goal_item from './Goal_item';
Goal.propTypes = {

};

function Goal(props) {
    return (
        <Layout_homePage title="Our Target">
            <div className="goal_container">
                <Goal_item img="/assets/img/goal/goals.png" content="The Sustainable Development Goals (SDGs)" box="goal_item_box" />
                <Goal_item img="/assets/img/goal/noPoverty.png" content="Extreme poverty rates have been cut by more than half since 2000" />
                <Goal_item img="/assets/img/goal/qualityEducation.png" classAdd="goal_ipad" content="Delivering quality education is the foundation to improving people’s lives and sustainable development." />
                <Goal_item img="/assets/img/goal/genderEquality.png" classAdd="goal_ipad" content="While the world has achieved progress towards gender equality " />
            </div>
        </Layout_homePage>
    );
}

export default Goal;