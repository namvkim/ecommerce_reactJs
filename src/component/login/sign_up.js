import React, { Component } from "react";
import axios from "axios";
import emailjs from 'emailjs-com';

class Sign_up extends Component {
  url_users = "http://localhost:3000/users";
  code=null;
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      name:"",
      email:"",
      pass:"",
      phone:"",
      address:""
    };
    this.onChange=this.onChange.bind(this);
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

  onChange(event){
    let key = event.target.name;
    let value = event.target.value;
    this.setState({[key]: value});
  }

  componentDidMount(){
    this.callAPI(this.url_users, "GET", "");
    this.code=Math.floor(Math.random() * (999999 - 100000)) + 100000;
  }

  sign_up=(e)=>{
    const result = this.state.result.find(
      (row) => row.email === this.state.email
    );

    if (result == null) {
      e.preventDefault();
      emailjs.sendForm('service_md7sog8', 'template_sbf1qwv', e.target, 'user_nKMa9PB1dHsiL0RZCyxod')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      var code2 = Number(prompt("Enter your code",''));
      if(this.code==code2){
        let data = {
        name: this.state.name,
        pass: this.state.pass,
        phone: this.state.phone,
        email: this.state.email,
        address: this.state.address,
        status: 1,
      }
      this.callAPI(this.url_users, "POST", data);
      alert("Create account complete !!")
      }else alert("The code you entered is incorrect !!")
    } else {
      alert("Account already exists !!");
    }
    window.location.reload();
  };

  render() {
    return (
      <div id="signup">
        <form className="form" action="http://localhost:3001" onSubmit={this.sign_up}>
          <p className="fieldset">
            <label className="image-replace username" htmlFor="signup-username">
              Username
            </label>
            <input
              className="full-width has-padding has-border"
              id="signup-username"
              type="text"
              placeholder="Username"
              name="name"
              onChange={this.onChange}
            />
          </p>
          <p className="fieldset">
            <label className="image-replace email" htmlFor="signup-email">
              E-mail
            </label>
            <input
              className="full-width has-padding has-border"
              id="signup-email"
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={this.onChange}
            />
          </p>
          <p className="fieldset">
            <label className="image-replace password" htmlFor="signup-password">
              Password
            </label>
            <input
              className="full-width has-padding has-border"
              id="signup-password"
              type="password"
              placeholder="Password"
              name="pass"
              onChange={this.onChange}
            />
            <a href="#0" className="hide-password">
              Show
            </a>
          </p>
          <p className="fieldset">
            <label className="image-replace phone" htmlFor="signup-phone">
              Phone
            </label>
            <input
              className="full-width has-padding has-border"
              id="signup-phone"
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={this.onChange}
            />
          </p>
          <p className="fieldset">
            <label className="image-replace Address" htmlFor="signup-Address">
              Address
            </label>
            <input
              className="full-width has-padding has-border"
              id="signup-Address"
              type="text"
              placeholder="Address"
              name="address"
              onChange={this.onChange}
            />
          </p>
          <p className="fieldset">
            <input
              className="full-width has-padding"
              type="submit"
              defaultValue="Create account"
            />
          </p>
          <input type="text" className="code" name="code" defaultValue={this.code}></input>
        </form>
      </div>
    );
  }
}

export default Sign_up;
