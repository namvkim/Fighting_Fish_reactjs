import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Menu from './content/menu/Menu';
import Banner from './content/banner/Banner';
import Value from './content/value/Value';
import Goal from './content/goal/Goal'
import About from './content/about/About';
import Achievement from './content/achievement/Achievement';
import Partner from './content/partner/Partner';
import Event from './content/event/Event';
import Gallery from './content/gallery/Gallery';
import New from './content/new/New';
import Contact from './content/contact/Contact';
import Footer from './content/footer/Footer';

Home.propTypes = {

};

function Home(props) {
    return (
        <Fragment>
            <Menu />
            <Banner />
            <Goal />
            <Value />
            <About />
            <Event />
            <Achievement />
            <Partner />
            <Gallery />
            <New />
            <Contact />
            <Footer />
        </Fragment>
    );
}

export default Home;