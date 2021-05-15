import React, {Component} from 'react';
class Header extends Component {
    render() {
        return (
            <div className="layout_header">
        <div className="layout_header_logo">
          <div className="layout_header_logo_box">
            <img src="https://baozdimsum.com/wp-content/uploads/2020/08/logo-01.png" alt="logo" />
            <h2>Well come !</h2>
          </div>
        </div>
        <div className="layout_header_main">
          <ul className="layout_header_menu">
            <a href="#">HOME PAGE</a>
            <a href="#">HISTORY</a>
            <a href="#">BOOK</a>
            <a href="#">RECRUITMENT</a>
            <a href="#">CONTACT</a>
            <a href="#"><i className="fas fa-cart-plus" /></a>
          </ul>
          <nav className="main-nav">
            <ul>
              <li><a className="signin" href="#0">Sign in</a></li>
              <li><a className="signup" href="#0">Sign up</a></li>
            </ul>
          </nav>
          <div className="user-modal">
            <div className="user-modal-container">
              <ul className="switcher">
                <li><a href="#0">Sign in</a></li>
                <li><a href="#0">New account</a></li>
              </ul>
              <div id="login">
                <form className="form">
                  <p className="fieldset">
                    <label className="image-replace email" htmlFor="signin-email">E-mail</label>
                    <input className="full-width has-padding has-border" id="signin-email" type="email" placeholder="E-mail" />
                    <span className="error-message">An account with this email address does not exist!</span>
                  </p>
                  <p className="fieldset">
                    <label className="image-replace password" htmlFor="signin-password">Password</label>
                    <input className="full-width has-padding has-border" id="signin-password" type="password" placeholder="Password" />
                    <a href="#0" className="hide-password">Show</a>
                    <span className="error-message">Wrong password! Try again.</span>
                  </p>
                  <p className="fieldset">
                    <input type="checkbox" id="remember-me" defaultChecked />
                    <label htmlFor="remember-me">Remember me</label>
                  </p>
                  <p className="fieldset">
                    <input className="full-width" type="submit" defaultValue="Login" />
                  </p>
                </form>
                <p className="form-bottom-message"><a href="#0">Forgot your password?</a></p>
              </div>
              <div id="signup">
                <form className="form">
                  <p className="fieldset">
                    <label className="image-replace username" htmlFor="signup-username">Username</label>
                    <input className="full-width has-padding has-border" id="signup-username" type="text" placeholder="Username" />
                    <span className="error-message">Your username can only contain numeric and alphabetic symbols!</span>
                  </p>
                  <p className="fieldset">
                    <label className="image-replace email" htmlFor="signup-email">E-mail</label>
                    <input className="full-width has-padding has-border" id="signup-email" type="email" placeholder="E-mail" />
                    <span className="error-message">Enter a valid email address!</span>
                  </p>
                  <p className="fieldset">
                    <label className="image-replace password" htmlFor="signup-password">Password</label>
                    <input className="full-width has-padding has-border" id="signup-password" type="password" placeholder="Password" />
                    <a href="#0" className="hide-password">Show</a>
                    <span className="error-message">Your password has to be at least 6 characters long!</span>
                  </p>
                  <p className="fieldset">
                    <label className="image-replace phone" htmlFor="signup-phone">Phone</label>
                    <input className="full-width has-padding has-border" id="signup-phone" type="number" placeholder="Phone" />
                  </p>
                  <p className="fieldset">
                    <label className="image-replace Address" htmlFor="signup-Address">Address</label>
                    <input className="full-width has-padding has-border" id="signup-Address" type="text" placeholder="Address" />
                  </p>
                  <p className="fieldset">
                    <input className="full-width has-padding" type="submit" defaultValue="Create account" />
                  </p>
                </form>
              </div>
              <div id="reset-password">
                <p className="form-message">Lost your password? Please enter your email address.<br /> You will receive a link to create a new password.</p>
                <form className="form">
                  <p className="fieldset">
                    <label className="image-replace email" htmlFor="reset-email">E-mail</label>
                    <input className="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail" />
                    <span className="error-message">An account with this email does not exist!</span>
                  </p>
                  <p className="fieldset">
                    <input className="full-width has-padding" type="submit" defaultValue="Reset password" />
                  </p>
                </form>
                <p className="form-bottom-message"><a href="#0">Back to log-in</a></p>
              </div>
              <a href="#0" className="close-form">Close</a>
            </div>
          </div>
        </div>
      </div>
        );
    }
}
export default Header;