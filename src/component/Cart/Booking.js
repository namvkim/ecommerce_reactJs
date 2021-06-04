import React, { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import axios from "axios";

const url_orders = "http://localhost:3000/orders";

class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
 
  render() {

    function sendEmail(e) {
      e.preventDefault();
      
      emailjs.sendForm('service_5q9220h', 'template_khwgw6p', e.target, 'user_FMcHQJXZttlMb1aB7CfYL')
        .then((result) => {

          let term = [];
          itemTerm.map((item, index)=>{
            let orders = {
              id: index+1,
              id_pro: item.id,
              quantity: item.quantity,
            }
            term.push(orders);

          })
            let order={
              id_user: user.id,
              date: new Intl.DateTimeFormat(['ban', 'id']).format(Date.now()),
              address: user.address,
              status:1,
              orders_details: term,
            };

            axios.post(url_orders, order).then(()=>{
              let cart=[];
              cartItems.map((row)=>{
                if(!row.checked){
                  cart.push(row);
                  
                }
              })
              localStorage.setItem('cartItems', JSON.stringify(cart));
              alert("Thank you very much. You booked successfully.")
            })

            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
      
    }
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const user = JSON.parse(localStorage.getItem("user"));
    const products = JSON.parse(localStorage.getItem("products"));
    let i=1;
    let total=0;
    let element = cartItems.map((row, index) => {
      if (row.checked){
        let product;
        products.map((row2)=>{
          if(row.id==row2.id) product= row2;
        })
        total+=product.price*row.quantity;
        return (
          <tr key={index}>
            <td>{i++}</td>
            <td >{product.name}</td>
            <td><img src={product.pics[0]}></img></td>
            <td>{product.price}</td>
            <td>{row.quantity}</td>
            <td>{product.price*row.quantity}</td>
          </tr>
        );
      }
    });
      let itemTerm =[];
   
      cartItems.map((item)=>{
        if(item.checked){
          products.map((row2)=>{
            if(item.id===row2.id){
              item.name=row2.name;
              item.subTotal=item.unitPrice*item.quantity;
              itemTerm.push(item);
            }
          })
         
        }
      })

    return (
      <div className="booking_main">
        
        <form method="POST" action="" onSubmit={sendEmail}>
          <div className="booking_info">
          
            <div className="info_left">
              <h2 className="infor_title">Information User</h2>
              <label className="infor_label" >Name</label>
              <input type="text" name="to_name" className="infoe" defaultValue={user.name} />
              <br />
              <label className="infor_label" >Phone</label>
              <input type="text" className="infoe" defaultValue={user.phone} />
              <br />
              <label className="infor_label" >Address</label>
              <input type="text" className="infoe" defaultValue={user.address} />
             
            </div>
           <input type="text" name="to_email" className="infoe" defaultValue={user.email} hidden/>
            
             
          
           
              
            </div>
         
        <table className="booking_table">
          <h3>Your Order</h3>
          <tbody>
            <tr>

              <th>STT</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
            {element}
            <tr>
              <td colSpan="5">Total</td>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>

        <input type="text" name="total" defaultValue={total} hidden/>
        {itemTerm.map((item, index)=>{
          return <div>
            <input type="text" name={`product_name${index +1}`} value={item.name} hidden/>
            <input type="text" name={`product_unitPrice${index +1}`} value={item.unitPrice} hidden/>
            <input type="text" name={`product_quantity${index +1}`} value={item.quantity} hidden/>
            <input type="text" name={`total${index +1}`} value={item.subTotal} hidden/>
            </div>
            })
      }
       

        <Link to="/cart">
          <button className="booking_cancel">Back</button>
        </Link>
        <button type="submit" className="booking_ok">Booking</button>
        </form>
      </div>
    );
  }
}
export default Booking;
