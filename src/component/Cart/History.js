import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes_his from "./routes_his";

class History extends Component {
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
        <div className="history">
          <Link to="/history">PREPARATION</Link>
          <Link to="/delivery">DELIVERY</Link>
          <Link to="/delivered">DELIVERED</Link>
        </div>
        <Switch>{this.showContentMenu(routes_his)}</Switch>
      </Router>
    );
  }
}

export default History;
