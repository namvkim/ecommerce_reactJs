import React, { Component } from "react";
import axios from "axios";

class Home_about extends Component {
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
      <div className="index_content_info">
        <div className="index_content_info_title">
          <img
            src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/orange_travelpictdinner_1484336833.png"
            alt=""
          />
          <h4>Maybe you don't know ?</h4>
        </div>
        <div className="index_content_info_main">
          {layout[8]}
        </div>
      </div>
    );
  }
}

export default Home_about;
