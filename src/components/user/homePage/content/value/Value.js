import React from 'react';
import PropTypes from 'prop-types';
import Value_item from './Value_item';
import Layout_homePage from '../layout/Layout_homePage';

Value.propTypes = {

};

function Value(props) {
  return (
    <Layout_homePage id="value">
      <div className="value_container">
        <Value_item title="Trust" img="assets/img/value/trust.png" />
        <Value_item title="Responsibility" img="assets/img/value/responsibility.png" />
        <Value_item title="Solidarity" img="assets/img/value/solidarity.png" />
        <Value_item title="Respect" img="assets/img/value/respect.png" />
        <Value_item title="Demanding approach" img="assets/img/value/demanding.png" />
      </div>
    </Layout_homePage>
  );
}

export default Value;