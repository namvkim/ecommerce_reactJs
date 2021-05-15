import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AppAdmin from './component/Admin/AppAdmin.js';
// import routes from './routes.js';

class App extends Component {
    render() {
        return (
            <div>
                <AppAdmin/>
            </div>
        );

    }
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
}


export default App;