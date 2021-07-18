import React from 'react';
import PropTypes from 'prop-types';

Layout_homePage.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
};

Layout_homePage.defaultProps = {
    title: '',
    id: '',
}

function Layout_homePage(props) {
    const { title, id, children } = props;

    return (
        <div className="layout_container" id={id}>
            <div className="layout_content">
                <div className="layout_title">{title}</div>
                <div className="layout_main">{children}</div>
            </div>
        </div>
    );
}

export default Layout_homePage;