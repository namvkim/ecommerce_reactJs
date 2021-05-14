import React, { Component } from "react";
import axios from "axios";

class Reset extends Component {
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

//   sign_in = () => {
//     let email = document.getElementById("signin-email").value;
//     let pass = document.getElementById("signin-password").value;
//     this.callAPI(this.url_users, "GET", "");
//     const result = this.state.result.find(
//       (row) => row.email == email && row.pass == pass
//     );
//     console.log(result);
//     if (result != null) {
//       if (result.status == 0) {
//         alert("your account has been locked ^.^");
//       } else localStorage.setItem("user", JSON.stringify(result));
//     } else alert("Incorrect account or password !!");
//   };

  render() {
    return (
      <div id="reset-password">
        <p className="form-message">
          Lost your password? Please enter your email address.
          <br /> You will receive a link to create a new password.
        </p>
        <form className="form">
          <p className="fieldset">
            <label className="image-replace email" htmlFor="reset-email">
              E-mail
            </label>
            <input
              className="full-width has-padding has-border"
              id="reset-email"
              type="email"
              placeholder="E-mail"
            />
            {/* <span className="error-message">
              An account with this email does not exist!
            </span> */}
          </p>
          <p className="fieldset">
            <input
              className="full-width has-padding"
              type="submit"
              defaultValue="Reset password"
            />
          </p>
        </form>
        <p className="form-bottom-message">
          <a href="#0">Back to log-in</a>
        </p>
      </div>
    );
  }
}

export default Reset;
