import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './Header/Header.js';
import rout from './rout.js';

class AppAdmin extends Component {
    render() {
        return (
            <Router>
               <div className="layout_header_admin">
                   <Header/>
             


                   <div class="layout_header_main_admin">
                    <ul class="layout_header_menu_admin">
                        <a ><Link to="/">BOOK</Link></a>
                        <a ><Link to="/ListProduct">LIST PRODUCT</Link></a>
                        <a ><Link to="/UserManagement">USER MANAGEMENT</Link></a>  
                        <a className="main-admin"><Link >ADMIN</Link></a>  

                    </ul>
                   
                       
                    
                        
                    
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