import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const New_Menu = (props) => {
  return (
    <Fragment>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="logo"><img src="assets/img/logo/logo-vi.png" alt="" /></Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#Sponsorship">Sponsorship</a></li>
              <li><a className="nav-link scrollto" href="#Internship">Internship</a></li>
              <li><a className="nav-link scrollto" href="#Difficulties">Difficulties</a></li>
              <li><a className="nav-link scrollto" href="#Activities">Activities</a></li>
              <li><a className="nav-link scrollto" href="#Graduation">Graduation</a></li>
              

            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          <button type="button" data-bs-toggle="modal" data-bs-target="#menu_model">
            <span className="menu_btn_1">Donate</span><span className="menu_btn_2">Thank you!</span>
          </button>
        </div>
      </header>
     
      {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a> */}
    </Fragment>
  );
}

export default New_Menu;