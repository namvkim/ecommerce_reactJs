import React, { Component } from "react";
import Home_advance from "./home_advance";
import Home_about from "./home_about";
import Home_product from "./home_product";

class Home_main extends Component {
  render() {
    return (
      <div>
        <Home_advance />
        <Home_about />
        <Home_product />
      </div>
    );
  }
}

export default Home_main;
