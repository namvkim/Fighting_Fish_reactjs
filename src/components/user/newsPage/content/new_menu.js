// import React from 'react';
// import PropTypes from 'prop-types';
  
// function New_menu(props) {
//      return (
//         <div className="new_menu_container">
//              <div className="new_menu_logo"><img src="logo-vi.png" alt=""></img></div>
//              <div className="new_menu_content">
//                  <div><a href="#hotnews" data-toggle="tab">Hot news</a></div>
//                  <div><a href="#difficulties" data-toggle="tab">Difficulties</a></div>
//                  <div><a href="#benefactors" data-toggle="tab">Benefactors</a></div>
//              </div>
//              <div className="new_donation"><button className="donation" >Donation</button></div>
//         </div>
//     );

// }



// export default New_menu;

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

New_Menu.propTypes = {

};

function New_Menu(props) {
  return (
    <Fragment>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo"><img src="assets/img/logo/logo-vi.png" alt="" /></a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hotnews">Hot news</a></li>
              <li><a className="nav-link scrollto" href="#difficulties">Difficulties</a></li>
              <li><a className="nav-link scrollto" href="#benefactors">Benefactors</a></li>
              {/* <li><a className="nav-link scrollto" href="#partner">Partners</a></li>
              <li><a className="nav-link scrollto" href="#partner">Partners</a></li>
              <li><a className="nav-link scrollto" href="#partner">Partners</a></li>
              <li><a className="nav-link scrollto" href="#partner">Partners</a></li>     */}
              
              
              <li><button data-hover="clickme">Donation</button></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
        </div>
      </header>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
    </Fragment>
  );
}

export default New_Menu;