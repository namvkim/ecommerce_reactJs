// import React, {Component} from 'react';
// import axios from 'axios';
// class ProDetail extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
           
//             check:false,
//             products:{}
//         }
//     }
//     getData=()=>{
//         axios({
//           method: 'GET',
//           url: 'http://localhost:3000/products/${id}',
//           data: null
//         }).then( res =>{
//           this.setState({products: res.data});
//         }).catch(err=>{});
//       }
    
      
//       componentDidMount(){
//         let id = this.props.match.params.id;
//       }
    

// //     getData=()=>{
// //      if(this.props.match.params.id){
// //          // const res = this.
// //      }
// //      this.setState({products: data})
 
     
// //    }
// //     componentDidMount(){
// //      //   //let id = this.props.match.params.id;
// //      //   if(this.props.match.params.id){
// //      //       const res = this.
// //      //   }
// //      this.getData();
        
// //     }
  
//     render(){
//         const {check,products} = this.state;
//         if(!check){
//             return(
//                 <div>loading...</div>
//             )
//         }
//      // var pid = this.props.match.params.id;
//         return(
//          // <div>
//          //    {
//          //        myData.map((val,key)=>{
//          //            if(val.id ===pid){
//          //                return <div key={key}>
//          //                    <h4>{val.img} {val.name} {val.price} {val.describes}
//          //                    {val.category} {val.status}</h4>
//          //                </div>
//          //            }
//          //            return '';
//          //        })
//          //    }
//          // </div>
//             <div>
//                 <h2>{products.name}</h2>
//                 <img src={products.img} width="90%" height="70%"/>
//                 <h5>{products.price}</h5>
//                 <h5>{products.describes}</h5>
//                 <p>{products.category}</p>
//                 <strong>{products.status} $</strong>
//             </div>
//         )
//     }
// }
// export default ProDetail;

import React, { Component } from 'react';

import axios from 'axios';


class ProDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      id: "",
      name: "",
      price: "",
      pic: "",
      describes: "",
      category:"",
      status: ""

    };

  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      console.log(id);
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${id}`,
        data: null
      }).then(res => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          price: res.data.price,
          pic: res.data.pic,
          describes: res.data.describes,
          category: res.data.category,
          status: res.data.status
        }); console.log(res.data);
      }).catch(err => {
      });
    }
  }

  render() {
    return (
      <div>
        <br /> <br /> <br /> <br/>
        <div className="container bootdey">
          <div className="col-md-12">
            <section className="panel">
              <div className="panel-body row">
                <div className="col-md-6">
                  <div className="pro-img-details">
                    <img src={this.state.pic} alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 className="pro-d-title">
                    <div ></div>
                  </h3>
                  <p>
                    <label><strong>Describe: </strong></label>
                    <span value={this.state.describes}></span>
                  </p>
                  <hr />
                  <div className="m-bot15"> <strong>Price: </strong><span className="pro-price" value={this.state.price}></span></div>
                  <div className="form-group">
                    <label><strong>Quantity: </strong></label>
                    <input type="quantiy" value={this.state.status} className="form-control quantity" />
                  </div>
                  <div className="form-group">
                    <label><strong>Category: </strong></label>
                    <input value={this.state.category} className="form-control quantity" />
                  </div>
                  <hr />
                  <p className="star_buy">
                    <span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span ></span>
                    </span>
                    <div className="btnBuy" style={{ marginLeft: 316 }}><button className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart" /> Add to Cart</button></div>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      // // Return ra nhiều câu lệnh từ 1 component
      // <React.Fragment>
      //   <div className="row">
      //     {this.state.products.map((product, index) => {
      //       return < Item
      //         key={index}
      //         product={product}
      //       />
      //     })}
      //   </div>
      // </React.Fragment>
    );
  }
}


// class Item extends Component {
//   render() {
//     return (
//       <div className="container bootdey">
//         <div className="col-md-12">
//           <section className="panel">
//             <div className="panel-body row">
//               <div className="col-md-6">
//                 <div className="pro-img-details">
//                   <img src={this.props.product.image} alt="" />
//                 </div>
//                 {/* <div className="pro-img-list">
//                   <a href="#">
//                     <img src={this.props.product.image.img1} alt="" />
//                   </a>
//                   <a href="#">
//                     <img src={this.props.product.image.img2} alt="" />
//                   </a>
//                   <a href="#">
//                     <img src={this.props.product.image.img3} alt="" />
//                   </a>
//                   <a href="#">
//                     <img src={this.props.product.image.img4} alt="" />
//                   </a>
//                 </div> */}
//               </div>
//               <div className="col-md-6">
//                 <h3 className="pro-d-title">
//                   <div value={this.props.product.name}></div>
//                 </h3>
//                 <p>
//                   <label><strong>Describe: </strong></label>
//                   {this.props.product.firm}
//                 </p>
//                 <hr />
//                 <div className="m-bot15"> <strong>Price: </strong> <span className="amount-old"></span>  <span className="pro-price"> {this.props.product.price}</span></div>
//                 <div className="form-group">
//                   <label><strong>Quantity: </strong></label>
//                   <input type="quantiy" placeholder={this.props.product.quantity} className="form-control quantity" />
//                 </div>
//                 <hr />
//                 <p className="star_buy">
//                   <span>
//                     <span class="fa fa-star checked"></span>
//                     <span class="fa fa-star checked"></span>
//                     <span class="fa fa-star checked"></span>
//                     <span class="fa fa-star"></span>
//                     <span class="fa fa-star"></span>
//                   </span>
//                   <div className="btnBuy" style={{ marginLeft: 316 }}><button className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart" /> Add to Cart</button></div>
//                 </p>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     );
//   }
// }

export default ProDetail;