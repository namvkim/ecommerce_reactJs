
import React, { Component } from 'react';
import axios from 'axios';


class HomeAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [],
            // img:[],
            sort: true,
            // title: "",
            // img: "",
            // price: ""
            id:"",
            name:"",
            price:"",
            describes:"",
            category:"",
            pic:"",
            status:""
          }
    }

   
  getData=()=>{
    axios({
      method: 'GET',
      url: 'http://localhost:3000/products',
      data: null
    }).then( res =>{
      this.setState({products: res.data});
    }).catch(err=>{});
  }
    componentDidMount() {
        this.getData();
    }


    render() {
        return(
            <div className="scroll">
              <div class=" home_pro ">
                
                {
        this.state.products.map(a=>{
          
          return(
            <div className=" class_home">
               
                <div ><b className="home_color">{a.name}</b></div>
                <div>
                    <img src={a.pic} alt="" width="80%" />
                </div>
                <div style={{color: 'red'}}>{a.price} VND</div>
                {/* <div style={{ fontSize:'10px'}} className="home_color">{a.status==(!0)?"Còn hàng":"Hết hàng"}</div> */}
               
                          
            </div>
          )
         
        })}
              
            </div>
            </div>
        );
    }
}



export default HomeAdmin;