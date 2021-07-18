import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        console.log(this.props.match);
        return (
            <div>
                this is home admin
                <Header />
                <Banner />
                <Footer />
                <button></button>
            </div>
        );
    }
}

export default Admin;