import React from 'react';
import PropTypes from 'prop-types';

Login.propTypes = {

};

function Login(props) {
  return (
    <form className="signin_body">
      <h1>Welcome</h1>
      <div className="signin_inset">
        <p>
          <input type="text" name="email" id="email" className="signin_email" placeholder="Enter your email" />
        </p>
        <p>
          <input type="password" name="password" id="password" className="signin_password" placeholder="Enter your password" />
        </p>
      </div>

      <p className="signin-container">
        <span>
          <div className="signin_checkbox"> <input type="checkbox" /> </div>
          <div> <label className="signin_robot">I'm not a robot</label> </div>

          <div >
            <img src="image/recaptcha.png" className="signin_img"></img>
          </div>

        </span>

        <button className="signin_button"  >Submit</button>
      </p>
      <div className="signin_footer">
        <div>
          <p>Don't have an account? <a href="#">Sign Up</a></p>
          <p><a href="#">Forgot Password</a></p>
        </div>
      </div>
    </form>
  );
}

export default Login;