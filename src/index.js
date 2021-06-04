import reactDom from 'react-dom';
import routes from './routes_manager';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Manager extends Component {
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
        <Switch>{this.showContentMenu(routes)}</Switch>
      </Router>
    );
  }
}


reactDom.render(
  <Manager/>,
  document.getElementById('root')
)