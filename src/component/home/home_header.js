import React, { Component } from "react";
import axios from "axios";
import Login_main from '../login/login_main';

class Home_header extends Component {
  url_layout_home = "http://localhost:3000/admin_home";

  constructor(props) {
    super(props);
    this.state = {
      layout: [],
    };
  }

  callAPI(url_api, method, body) {
    axios({
      method: method,
      url: url_api,
      data: body,
    })
      .then((res) => {
        this.setState({ layout: res.data });
      })
      .catch((err) => {
        alert(err);
      });
  }

  componentDidMount() {
    this.callAPI(this.url_layout_home, "GET", "");
  }

  render() {
    let layout=[];
    var i=0;
    this.state.layout.map((row,index)=>{
      layout[i]=row.content;
      i++;
    })
    return (
      <div className="layout_header">
        <div className="layout_header_logo">
          <div className="layout_header_logo_box">
            <img
              src={layout[1]}
              alt="logo"
            />
            <h2>{layout[0]}</h2>
          </div>
        </div>
        <div className="layout_header_main">
          <ul className="layout_header_menu">
            <a href="#">HOME PAGE</a>
            <a href="#">HISTORY</a>
            <a href="#">CART</a>
            <a href="#">RECRUITMENT</a>
            <a href="#">CONTACT</a>
            <a href="#">
              <i className="fas fa-cart-plus" />
            </a>
          </ul>
          <Login_main/>
        </div>
      </div>
    );
  }
}

export default Home_header;
