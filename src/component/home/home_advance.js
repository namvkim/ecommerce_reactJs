import React, { Component } from "react";
import axios from "axios";

class Home_advance extends Component {
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

  show=()=>{
    let layout=[];
    var i=0;
    this.state.layout.map((row,index)=>{
      layout[i]=row.content;
      i++;
    })
    document.getElementById('content_advan_img1').style.backgroundImage='url('+layout[2]+')';
    document.getElementById('content_advan_img2_1_1').style.backgroundImage='url('+layout[3]+')';
    document.getElementById('content_advan_img2_1_2').style.backgroundImage='url('+layout[4]+')';
    document.getElementById('content_advan_img2_2_1').style.backgroundImage='url('+layout[5]+')';
    document.getElementById('content_advan_img2_2_2').style.backgroundImage='url('+layout[6]+')';
    document.getElementById('content_advan_img3').style.backgroundImage='url('+layout[7]+')';
  }
  render() {
    setTimeout(()=>this.show(),0);
    return (
      <div className="index_content_advan">
        <div className="index_content_advan_img1" id="content_advan_img1" />
        <div className="index_content_advan_img2">
          <div className="index_content_advan_img2_1">
            <div
              className="index_content_advan_img2_1_1"
              id="content_advan_img2_1_1"
            ></div>
            <div
              className="index_content_advan_img2_1_2"
              id="content_advan_img2_1_2"
            ></div>
          </div>
          <div className="index_content_advan_img2_2">
            <div
              className="index_content_advan_img2_2_1"
              id="content_advan_img2_2_1"
            ></div>
            <div
              className="index_content_advan_img2_2_2"
              id="content_advan_img2_2_2"
            ></div>
          </div>
        </div>
        <div className="index_content_advan_img3" id="content_advan_img3" />
      </div>
    );
  }
}

export default Home_advance;
