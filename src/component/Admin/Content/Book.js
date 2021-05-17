import React, { Component } from 'react'
import { Link, Router,Route, Switch } from 'react-router-dom';
import Dagiao from './Order/dagiao';
import Dangchuanbi from './Order/dangchuanbi';
import Danggiao from './Order/danggiao';

import route from './route';
class Book extends Component {
    constructor(props){
        super(props);
        this.state = {
          book : [],
          pro:""
        }
    }
    render() {
        return (
            
                //   <Router>
                        <div className="class_pro">
                <div className="book_content_a">
                
                        {/* <li className="class_pro"> 
                        <Link  className="class_pro" to="/">
                        <p className="book_class_icon_padding"><img src="https://image.flaticon.com/icons/png/512/10/10627.png" width="50px" /></p>
                        <p className="book_class_text_padding"  style={{color: 'black'}}> Đang chuẩn bị</p>
                        </Link>
                        </li>
                    
                        <li className="class_pro">
                        <Link  className="class_pro" to="/danggiao">
                        <p className="book_class_icon_padding"><img src="https://static.thenounproject.com/png/191969-200.png" width="50px" /> </p>
                        <p className="book_class_text_padding" style={{color: 'black'}}>Đang giao</p>
                        </Link>
                        </li>
                        <li className="class_pro">
                        <Link  className="class_pro" to="dagiao">
                        <p className="book_class_icon_padding"><img src="https://i.pinimg.com/originals/67/97/28/6797287e51b143b9645e11fedf1eaa8d.png" width="50px" /></p>
                        <p className="book_class_text_padding"  style={{color: 'black'}}> Đã giao</p>
                        </Link>
                        </li> */}


                        <div className="tab">
                            <button className="tablinks class_pro" onClick={()=>this.openCity( 'Dangchuanbi')} return true >
                                <p className="book_class_icon_padding"><img src="https://image.flaticon.com/icons/png/512/10/10627.png" width="50px" /></p>
                                <p className="book_class_text_padding">Đang chuẩn bị</p>
                            </button>
                            <button className="tablinks class_pro" onClick={()=>this.openCity( 'Danggiao')}  >
                                <p className="book_class_icon_padding"><img src="https://static.thenounproject.com/png/191969-200.png" width="50px" /></p>
                                <p className="book_class_text_padding">Đang giao</p>
                                </button>
                            <button className="tablinks class_pro" onClick={()=>this.openCity( 'Dagiao')}>
                                 <p className="book_class_icon_padding"><img src="https://i.pinimg.com/originals/67/97/28/6797287e51b143b9645e11fedf1eaa8d.png" width="50px" /></p>
                                 <p className="book_class_text_padding">Đã giao</p>
                                 </button>
                           
                        </div>
                        
                </div>
                <div className="book_content_b">
                {/* <Switch>
                        {this.openCity("Dangchuanbi")}
                </Switch> */}
                <div id="Dangchuanbi" className="tabcontent" >
                        <Dangchuanbi/>
                        </div>
                        <div id="Danggiao" className="tabcontent">
                       <Danggiao/>
                        </div>

                        <div id="Dagiao" className="tabcontent">
                        <Dagiao/>
                        </div>

                        {/* <Switch>
                            {this.showContentMenu(route)}
                        </Switch>  */}
                       
                </div>
            </div>
                //   </Router>
               
        );
    }

    // showContentMenu = (route) => {
    //     var result = null;
    //     if (route.length > 0) {
    //         result = route.map((route, index) => {
    //             return (
    //                 <Route key={index} path={route.path} exact={route.exact} component={route.main} />
    //             );
    //         });
    //     }
    //     return result;
    // }


    componentDidMount() {
        this.openCity("Dangchuanbi");
    }
    
     openCity=( bookname)=> {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(bookname).style.display = "block";
      return (
          this.className += " active")
    }

    
    

}

export default Book;