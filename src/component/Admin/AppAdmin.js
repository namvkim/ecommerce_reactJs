import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './Header/Header.js';
import rout from './rout.js';

class AppAdmin extends Component {
    render() {
        return (
            <Router>
               <div className="layout_header">
                   <Header/>
                   {/* <div>
                         <ul>
                            <li><Link to="/">HomeAdmin</Link></li>
                            <li><Link to="/Book">Book</Link></li>
                            <li><Link to="/ListProduct">ListProduct</Link></li>
                            <li><Link to="/UserManagement">UserManagement</Link></li>
                        </ul>
                   </div> */}


                   <div class="layout_header_main">
                    <ul class="layout_header_menu">
                        <a ><Link to="/">HOME PAGE</Link></a>
                        <a ><Link to="/Book">BOOK</Link></a>
                        <a ><Link to="/ListProduct">LIST PRODUCT</Link></a>
                        <a ><Link to="/UserManagement">USER MANAGEMENT</Link></a>                       
                    </ul>
                    <nav class="main-nav">
                        <ul>
                            <a><b>ADMIN</b></a>   
                        </ul>
                    </nav>
                   </div>

                    <div>
                        <Switch>
                            {this.showContentMenu(rout)}
                        </Switch> 
                    </div>
               </div>


            </Router>
        );

    }
    showContentMenu = (rout) => {
        var result = null;
        if (rout.length > 0) {
            result = rout.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                );
            });
        }
        return result;
    }
}


export default AppAdmin;