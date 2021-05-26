import React, { Component } from "react";
import Layout_header from "./component/layout/layout_header";
import Layout_footer from "./component/layout/layout_footer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes from "./routes";
import Login_main from "./component/login/login_main";
import Booking from "./component/Cart/Booking";

class App extends Component {
  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };

  render() {
    return (
      <Router>
        <div className="layout_header">
          <Layout_header />
          <div className="layout_header_main">
            <ul className="layout_header_menu">
                <Link to="/">HOME PAGE</Link>
                <Link to="/history">HISTORY</Link>
                <Link to="/">RECRUITMENT</Link>
                <Link to="/">CONTACT</Link>
                <Link to="/cart"><i className="fas fa-cart-plus" />CART</Link>
            </ul>
            <Login_main />
          </div>
        </div>
        <div className="layout_body">
          <div className="layout_content">
            <Switch>{this.showContentMenu(routes)}</Switch>
            {/* <Booking/> */}
          </div>
        </div>
        <Layout_footer />
      </Router>
    );
  }
}

export default App;
