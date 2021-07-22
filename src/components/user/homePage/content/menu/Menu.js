import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

Menu.propTypes = {

};

function Menu(props) {

  return (
    <Fragment>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="logo"><img src="assets/img/logo/logo-vi.png" alt="" /></Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#home">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#achievement">Achievement</a></li>
              <li><a className="nav-link scrollto" href="#partner">Partners</a></li>
              <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
              <li><a className="nav-link scrollto" href="#news">News</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>

            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          <button type="button" data-bs-toggle="modal" data-bs-target="#menu_model">
            <span className="menu_btn_1">Donate</span><span className="menu_btn_2">Thank you!</span>
          </button>
        </div>
      </header>
      <div className="modal fade" id="menu_model" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              aaaaaaaa
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a> */}
    </Fragment>
  );
}

export default Menu;