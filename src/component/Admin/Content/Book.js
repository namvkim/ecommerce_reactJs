import React, { Component } from 'react'
import { Link, Router,Route, Switch } from 'react-router-dom';
import Dangchuanbi from '../Order/Dangchuanbi';
import route from '../Order/route';
class Book extends Component {
    

    render() {
        return (
            //    <Router>
                    <div className="class_pro">
                <div className="book_content_a">
                
                        {/* <li className="class_pro"> */}
                        <Link to ='Book/ ' className="class_pro">
                        <p className="book_class_icon_padding"><img src="https://image.flaticon.com/icons/png/512/10/10627.png" width="50px" /></p>
                        <p className="book_class_text_padding"  style={{color: 'black'}}> Đang chuẩn bị</p>
                        </Link>
                        {/* </li> */}
                    
                        {/* <li className="class_pro"> */}
                        <Link to ='Book/Danggiao' className="class_pro">
                        <p className="book_class_icon_padding"><img src="https://static.thenounproject.com/png/191969-200.png" width="50px" /> </p>
                        <p className="book_class_text_padding" style={{color: 'black'}}>Đang giao</p>
                        </Link>
                        {/* </li> */}
                        {/* <li className="class_pro"> */}
                        <Link to ='Book/Dagiao' className="class_pro">
                        <p className="book_class_icon_padding"><img src="https://i.pinimg.com/originals/67/97/28/6797287e51b143b9645e11fedf1eaa8d.png" width="50px" /></p>
                        <p className="book_class_text_padding"  style={{color: 'black'}}> Đã giao</p>
                        </Link>
                        {/* </li> */}
                </div>
                <div className="book_content_b">
                        {/* <Switch>
                            {this.showContentMenu(route)}
                        </Switch>  */}
                        {/* <Dangchuanbi/> */}
                      
                </div>
            </div>
               /* </Router> */
        );
    }

    showContentMenu = (route) => {
        var result = null;
        if (route.length > 0) {
            result = route.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                );
            });
        }
        return result;
    }

}

export default Book;