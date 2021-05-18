import React, { Component } from "react";
import Sign_in from "./sign_in";
import Sign_up from "./sign_up";
import Reset from "./reset";

class Login_main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      // load:true,
    };
  }

  // load=()=>{
  //   this.setState({load:!this.state.load},alert(this.state.load));
  // }

  check = () => {
    if (this.state.user != null) {
      document.getElementById("log_out").style.display = "block";
      document.getElementById("log_in").style.display = "none";
    } else {
      document.getElementById("log_out").style.display = "none";
      document.getElementById("log_in").style.display = "block";
    }
  };

  componentDidMount() {
    this.setState({ user: JSON.parse(localStorage.getItem("user")) });
    this.check();
  }

  componentDidUpdate() {
    this.check();
  }

  logOut = () => {
    localStorage.removeItem("user");
    this.setState({ user: null });
  };

  render() {
    return (
      <div className="login_main">
        <div id="log_out" style={{ display: "none" }}>
          <span className="log_out_name" id="log_out_name">
            {this.state.user != null ? this.state.user.name : ""}
          </span>
          <button className="log_out_btn" onClick={() => this.logOut()}>
            LogOut
          </button>
        </div>
        <nav className="main-nav" id="log_in">
          <ul>
            <li>
              <a className="signin" href="#0">
                Sign in
              </a>
            </li>
            <li>
              <a className="signup" href="#0">
                Sign up
              </a>
            </li>
          </ul>
        </nav>
        <div className="user-modal">
          <div className="user-modal-container">
            <ul className="switcher">
              <li>
                <a href="#0">Sign in</a>
              </li>
              <li>
                <a href="#0">New account</a>
              </li>
            </ul>
            <Sign_in />
            <Sign_up />
            <Reset />
            {/* <a href="#0" className="close-form">
              Close
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Login_main;
