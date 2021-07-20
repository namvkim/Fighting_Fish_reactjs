import React from 'react';
import PropTypes from 'prop-types';
import Partner from './Partner';

Admin.propTypes = {

};

// change tab pane
function openLink(animName) {
    var i, x;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(animName).style.display = "block";
}

function Admin(props) {
    return (
        <div>
            <div className="admin_container" id="admin_body-pd">
                <div className="admin_header" id="admin_header">
                    <div className="admin_header_toggle">
                        <i className="bx bx-menu" id="admin_header-toggle" />
                    </div>
                    <div className="admin_header_title">Admin page</div>
                    <div className="admin_header_img">
                        <img src="https://i.pinimg.com/originals/60/10/4a/60104a06b2c5da9e7ab683b3d6cfdd15.jpg" alt="" />
                    </div>
                </div>
                <div className="admin_l-navbar" id="admin_nav-bar">
                    <nav className="admin_nav">
                        <div>
                            <a href="#" className="admin_nav_logo">
                                <i className="bx bx-layer admin_nav_logo-icon" />
                                <span className="admin_nav_logo-name">User Interface</span>
                            </a>
                            <div className="nav_list">
                                <a href="#" onClick={() => openLink('ad_dashboard')} className="admin_nav_link admin_active">
                                    <i className="bx bx-grid-alt admin_nav_icon" />
                                    <span className="nav_name">Dashboard</span>
                                </a>
                                <a href="#" onClick={() => openLink('ad_users')} className="admin_nav_link">
                                    <i className="bx bx-user admin_nav_icon" />
                                    <span className="nav_name">Users</span>
                                </a>
                                <a href="#" onClick={() => openLink('ad_gallery')} className="admin_nav_link">
                                    <i className="bx bx-image admin_nav_icon" />
                                    <span className="nav_name">Gallery</span>
                                </a>
                                <a href="#" onClick={() => openLink('ad_news')} className="admin_nav_link">
                                    <i className="bx bx-news admin_nav_icon" />
                                    <span className="nav_name">News</span>
                                </a>
                                <a href="#" onClick={() => openLink('ad_event')} className="admin_nav_link">
                                    <i className="bx bx-calendar-event admin_nav_icon" />
                                    <span className="nav_name">Event</span>
                                </a>
                                <a href="#" onClick={() => openLink('ad_achievement')} className="admin_nav_link">
                                    <i className="bx bx-code-block admin_nav_icon" />
                                    <span className="nav_name">Achievement</span>
                                </a>
                                <a href="#" onClick={() => openLink('ad_partner')} className="admin_nav_link">
                                    <i className="bx bx-building-house admin_nav_icon" />
                                    <span className="nav_name">Partner</span>
                                </a>
                                <a href="#" onClick={() => openLink('ad_banner')} className="admin_nav_link">
                                    <i className="bx bx-movie-play admin_nav_icon" />
                                    <span className="nav_name">Banner</span>
                                </a>
                                <a href="#" onClick={() => openLink('ad_files')} className="admin_nav_link">
                                    <i className="bx bx-folder admin_nav_icon" />
                                    <span className="nav_name">Files</span>
                                </a>
                            </div>
                        </div>
                        <a href="#" className="admin_nav_link">
                            <i className="bx bx-log-out admin_nav_icon" />
                            <span className="nav_name">SignOut</span>
                        </a>
                    </nav>
                </div>
                {/*Container Main start*/}
                <div className="admin_height-100 bg-light">
                    <div id="ad_dashboard" className="tab w3-animate-right">
                        <h2>Slide in from dashboard</h2>
                    </div>
                    <div id="ad_users" className="tab w3-animate-right" style={{ display: 'none' }}>
                        <nav className="admin_tab_title">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#visited" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                    Visited
                                </button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#contacted" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                    Contacted
                                </button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                                    Donated
                                </button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active admin_tab_box" id="visited" role="tabpanel" aria-labelledby="nav-home-tab">
                                <table className="admin_table">
                                    <thead><tr className="admin_table_header">
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                                        <th>Created at</th>
                                    </tr></thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>le son nam</td>
                                            <td>nam.le22@student.passerellesnumeriques.org</td>
                                            <td>0386005775</td>
                                            <td>101b-le huu trac-son tra-da nang</td>
                                            <td>2021-18-7 11:55:00</td>
                                        </tr>
                                    </tbody></table>
                            </div>
                            <div className="tab-pane fade admin_tab_box" id="contacted" role="tabpanel" aria-labelledby="nav-profile-tab">
                                contacted
                            </div>
                            <div className="tab-pane fade admin_tab_box" id="donated" role="tabpanel" aria-labelledby="nav-contact-tab">
                                Donated
                            </div>
                        </div>
                    </div>
                    <div id="ad_gallery" className="tab w3-animate-right" style={{ display: 'none' }}>
                        <h2>Slide in from gallery</h2>
                    </div>
                    <div id="ad_news" className="tab w3-animate-right" style={{ display: 'none' }}>
                        <h2>Slide in from news</h2>
                    </div>
                    <div id="ad_event" className="tab w3-animate-right" style={{ display: 'none' }}>
                        <h2>Slide in from event</h2>
                    </div>
                    <div id="ad_achievement" className="tab w3-animate-right" style={{ display: 'none' }}>
                        <h2>Slide in from achievement</h2>
                    </div>
                    <div id="ad_partner" className="tab w3-animate-right" style={{ display: 'none' }}>
                        <Partner />
                    </div>
                    <div id="ad_banner" className="tab w3-animate-right" style={{ display: 'none' }}>
                        <h2>Slide in from banner</h2>
                    </div>
                    <div id="ad_files" className="tab w3-animate-right" style={{ display: 'none' }}>
                        <h2>Slide in from files</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;