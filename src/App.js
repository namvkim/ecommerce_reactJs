import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routes from './routes.js';

class App extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/add">Add</Link></li>
                </ul>
                <Switch>
                    {this.showContentMenu(routes)}
                </Switch>
            </Router>
        );

    }
    showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                );
            });
        }
        return result;
    }
}


export default App;