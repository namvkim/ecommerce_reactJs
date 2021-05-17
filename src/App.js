import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AppAdmin from './component/Admin/AppAdmin.js';
// import routes from './routes.js';
// import Header from '../../ecomerce_reactJS_Project/src/compenent/Header.js';
// import routes from './routes.js';
// import Header from './component/Admin/Header/Header';
// import Content from './component/Admin/Content/HomeAdmin';
// import AnhMenu from './component/home/AnhMenu.js';

class App extends Component {
    render() {
        return (
            // <div>
            //     <AppAdmin/>
            // </div>
            <Router>
                {/* <Header /> */}
                <AppAdmin/>
                {/* <AnhMenu /> */}
                {/* <Content /> */}
                {/* <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/add">Add</Link></li>
                </ul> */}
                <Switch>
                    {this.showContentMenu(routes)}
                </Switch>
            </Router>
        );

    // }
    // showContentMenu = (routes) => {
    //     var result = null;
    //     if (routes.length > 0) {
    //         result = routes.map((route, index) => {
    //             return (
    //                 <Route key={index} path={route.path} exact={route.exact} component={route.main} />
    //             );
    //         });
    //     }
    //     return result;
    // }
}}


export default App;