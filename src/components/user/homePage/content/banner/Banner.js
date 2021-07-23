import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = (props) => {
    const [item, setItem] = useState();
    const [results, setResults] = useState([]);

    const onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const newItem = { ...item, [key]: value };

        setItem(newItem);
    }

    const post = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/sendEmail',
            data: item,
        })
            .then((res) => {
                localStorage.setItem('email', res.data);
                alert('You have successfully followed the site!!');
            })
            .catch((err) => {
                alert("Follow failed! please check your email");
            });
    }

    return (
        <div className="banner_container" id="home">
            <div className="banner_content">

                <div className="banner_content_title">
                    Welcome to <span className="banner_content_title_span1">PNV</span>
                </div>
                <div className="banner_content_info">
                    Passerelles numériques Việt Nam là tổ chức phi chính phủ của Pháp thành lập năm 2010.
                </div>
                <div className="banner_content_subcribe">
                    <input className="banner_input form-control" onChange={onChange} type="email" name="txtEmail" placeholder="enter your email"></input>
                    <input type="button" className="banner_button_subcribe" onClick={post} value="Follow"></input>
                </div>
                <div className="banner_button">
                    <input type="button" className="banner_button_enroll" value="Enrollment" data-bs-toggle="modal" data-bs-target="#banner_model"></input>

                    <a
                        href="https://youtu.be/WUOxMDu-9zM"
                        className="glightbox banner_button_watch"
                    >
                        <i className='bx bx-caret-right-circle'></i>
                        <div>Watch Video</div>
                    </a>
                </div>
                <div className="modal fade" id="banner_model" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Fill in enrollment information</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" name="name" className="form-control mb-2" placeholder="Enter your name" />
                                <input type="text" name="phone" className="form-control mb-2" placeholder="Enter your phone" />
                                <input type="text" name="address" className="form-control mb-2" placeholder="Enter your address" />
                                <input type="text" name="school" className="form-control mb-2" placeholder="Enter your school name" />
                                <input type="text" name="gender" className="form-control mb-2" placeholder="Enter your gender" />
                                <input type="text" name="birthDay" className="form-control mb-2" placeholder="Enter your birth day" />
                                <input type="file" name="img" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;