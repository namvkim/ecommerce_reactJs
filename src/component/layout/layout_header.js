import React, { Component } from "react";
import axios from "axios";
import Login_main from "../login/login_main";

class Layout_header extends Component {
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
    let layout = [];
    var i = 0;
    this.state.layout.map((row, index) => {
      layout[i] = row.content;
      i++;
    });
    return (
      <div className="layout_header_logo">
        <div className="layout_header_logo_box">
          <img src={layout[1]} alt="logo" />
          <h2>{layout[0]}</h2>
        </div>
      </div>
    );
  }
}

export default Layout_header;
