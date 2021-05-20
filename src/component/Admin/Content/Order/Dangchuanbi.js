import React, { Component } from 'react';
import axios from 'axios';


class Dangchuanbi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      users: [],
      products: [],
      sort: true,
      id: "",
      id_user: "",
      date: "",
      status: "",
      orders_details: [
        {
          id: '',
          id_pro: "",
          quantity: ""
        }
      ]
    }
  }



  getData = (id) => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/orders',
      data: { id: id + 1 }
    }).then(res => {
      this.setState({ orders: res.data });
    }).catch(err => { });


  }

  getUser = (id) => {
    axios({
      method: 'GET',
      url: `http://localhost:3000/users/${id}`,
      data: { id: id + 1 }
    }).then(res => {
      this.setState({ users: res.data });
    }).catch(err => { });

  }

  getPro = (id) => {
    axios({
      method: 'GET',
      url: `http://localhost:3000/products/${id}`,
      data: { id: id + 1 }
    }).then(res => {
      this.setState({ products: res.data });
    }).catch(err => { });
    

  }
  componentDidMount() {
    this.getData();
    this.getUser(this.state.id_user)
    this.getPro(this.state.orders_details.id_pro)
  }

  // render() {
  //   var pri=0;
  //   return (

  //     <div className="container">
  //       {  this.state.orders.map((orders) => {
  //         return (

  //           <div href="#demo" data-toggle="collapse">
  //             <table className="border col-sm-12 p-2 m-2">

  //               <tr style={{ color: 'white' }}>
  //                 <th>Tên user </th>
  //                 <th>Tên sản phẩm</th>
  //                 <th>Hình ảnh</th>
  //                 <th>Số lượng</th>
  //                 <th>Tổng</th>
  //               </tr>
  //               <tr id="demo" className="collapse">
  //                 <td>
  //                   {this.state.users.map((user) => {
  //                     return (
  //                       <p>{orders.id_user === user.id ? user.name : null}</p>
  //                     )
  //                   }
  //                   )
  //                   }
  //                 </td>
  //                 <td >
  //                   {this.state.products.map((products) => {
                      
  //                     return (
  //                       <p>{orders.orders_details[0].id_pro === products.id ? products.name : null}</p>
                        
  //                     )
  //                   }
  //                   )
  //                   }</td>
  //                 <td>
  //                   {this.state.products.map((products) => {
  //                     return (
  //                       <p>{orders.orders_details[0].id_pro === products.id ? <img src={products.pics[0]} width="80" height="60" /> : null}</p>
  //                     )
  //                   }
  //                   )
  //                   }
  //                 </td>
  //                 <td>{orders.orders_details[0].quantity}</td>
  //                 <td  > 
  //                 {this.state.products.map((products) => {
  //                     return (
  //                       <p>{orders.orders_details[0].id_pro === products.id ? pri=products.price*5:null}</p>                        
  //                     )
  //                   }
  //                   )
  //                   } </td>
  //               </tr>

  //             </table>
  //           </div>
  //         )
  //       })}
  //     </div>
  //   );
  // }


  render() {
    return (
      <div className="layout_body">
      <div className="book_content_user">
        
        {  this.state.orders.map((orders) => {
          return (
            <table  className="border  col-sm-12 p-2 m-2">
            <tr className="tr">
                <td>{orders.id}</td>
                {/* <td>{orders.orders_details[0].id_pro}</td> */}
                <td>Tên chưa ra
                {this.state.products.map((products) => {

                    return (
                      <p>{orders.orders_details[0].id_pro === products.id ? products.name : null}</p>
                    
                    )
                  }
                  )
                  }
                  
                  
                </td>
                <td>{orders.date}</td>
                <td>Tổng chưa biết</td>
                <td className="btn_xn"> 
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Detail</button>
                </td>                                 
                <td className="btn_xn">
                <button type="button" class="btn btn-success">Confirm</button>
                </td>                                  
            </tr>
          </table>
          )}
          )}
          <table  className="border  col-sm-12 p-2 m-2">
              <tr className="tr">
                  <td>2</td>
                  <td>Nam</td>
                  <td>20/2/2021</td>
                  <td>$ 20000</td>
                  <td className="btn_xn"> 
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Detail</button>
                  </td>                                 
                  <td className="btn_xn">
                  <button type="button" class="btn btn-success">Confirm</button>
                  </td>           
              </tr>
        </table>
          

            <div class="container">
            <div class="modal fade" id="myModal">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                
                  <div class="modal-header">
                    <h4 class="modal-title">Nam</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  
                  <div class="modal-body">
                    <table  className="border  col-sm-12 p-2 m-2">
                      <tr>
                        <td>1</td>
                        <td>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2qXE0p6VHsnl8JEcYBPj4lb2zYjceQxQNw&usqp=CAU" width="80" height="60" />
                        </td>
                        <td>Sting</td>
                        <td>$6600</td>
                         
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMLgcZYY6VdFV_Md2rhQm74UccJAZXY0GLQ&usqp=CAU" width="80" height="60" />
                        </td>
                        <td>Trà sữa</td>
                        <td>$20000</td>
                         
                      </tr>
                    </table>
                  </div>
                  
                  <div class="modal-footer">
                  <td>Tổng tiền : $26600</td>
                  <td><button type="button" class="btn btn-success">Confirm</button></td>
                  

                    {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
                  </div>
                  
                </div>
              </div>
            </div>
  
</div>

      </div>
      //</div> 
        

      //   {  this.state.orders.map((orders) => {
      //     return (

      //      <div></div>
      //     )
      //   })}
      // </div>
    );
  }

}



export default Dangchuanbi;