import React, { Component } from "react";
import axios from "axios";

class Sign_in extends Component {
  url_users = "http://localhost:3000/users";
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  callAPI(url_api, method, body) {
    axios({
      method: method,
      url: url_api,
      data: body,
    })
      .then((res) => {
        this.setState({ result: res.data });
      })
      .catch((err) => {
        alert(err);
      });
  }

  componentDidMount() {}
  sign_in = () => {
    let email = document.getElementById("signin-email").value;
    let pass = document.getElementById("signin-password").value;
    this.callAPI(this.url_users, "GET", "");
    const result = this.state.result.find(
      (row) => row.email === email && row.pass === pass
    );
    console.log(result);
    if (result != null) {
      if (result.status === 0) {
        alert("your account has been locked ^.^");
      } else localStorage.setItem("user", JSON.stringify(result));
    } else alert("Incorrect account or password !!");
  };

  render() {
    return (
      <div id="login">
        <form className="form">
          <p className="fieldset">
            <label className="image-replace email" htmlFor="signin-email">
              E-mail
            </label>
            <input
              className="full-width has-padding has-border"
              id="signin-email"
              type="email"
              placeholder="E-mail"
            />
            {/* <span className="error-message">
                    An account with this email address does not exist!
                  </span> */}
          </p>
          <p className="fieldset">
            <label className="image-replace password" htmlFor="signin-password">
              Password
            </label>
            <input
              className="full-width has-padding has-border"
              id="signin-password"
              type="password"
              placeholder="Password"
            />
            <a href="#0" className="hide-password">
              Show
            </a>
            {/* <span className="error-message">
                    Wrong password! Try again.
                  </span> */}
          </p>
          <p className="fieldset">
            <input type="checkbox" id="remember-me" defaultChecked />
            <label htmlFor="remember-me">Remember me</label>
          </p>
          <p className="fieldset">
            <input
              className="full-width"
              type="submit"
              defaultValue="Login"
              onClick={() => this.sign_in()}
            />
          </p>
        </form>
        <p className="form-bottom-message">
          <a href="#0">Forgot your password?</a>
        </p>
        <a href="#0" className="close-form">
          Close
        </a>
      </div>
    );
  }
}

export default Sign_in;
