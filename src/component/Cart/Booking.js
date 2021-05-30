import React, { Component } from "react";
import { Link } from "react-router-dom";

class Booking extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
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
            <td>{product.name}</td>
            <td><img src={product.pics[0]}></img></td>
            <td>{product.price}</td>
            <td>{row.quantity}</td>
            <td>{product.price*row.quantity}</td>
          </tr>
        );
      }
    });

    return (
      <div className="booking_main">
        <form method="POST" action="">
          <div className="booking_info">
            <div className="info_left">
              Name: <input type="text" defaultValue={user.name} />
              <br />
              Phone: <input type="text" defaultValue={user.phone} />
            </div>
            <div className="info_right">
              Address: <br />
              <textarea rows={2} cols={70} defaultValue={user.address} />
            </div>
          </div>
        </form>
        <table className="booking_table">
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
        <Link to="/cart">
          <button className="booking_cancel">Back</button>
        </Link>
        <button className="booking_ok">Booking</button>
      </div>
    );
  }
}
export default Booking;
