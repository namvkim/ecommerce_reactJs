import React, { Component } from "react";
import Home_header from "./home_header";
import Home_advance from "./home_advance";
import Home_about from "./home_about";
import Home_product from "./home_product";
import Home_footer from "./home_footer";

class Home_main extends Component {
  render() {
    return (
      <div>
        <Home_header />
        <div className="layout_body">
          <div className="layout_content">
            <Home_advance />
            <Home_about />
            <Home_product />
          </div>
        </div>
        <Home_footer />
      </div>
    );
  }
}

export default Home_main;
