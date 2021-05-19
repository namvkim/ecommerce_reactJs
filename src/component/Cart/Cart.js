import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import util from "../../util";

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
       total:0,
    };
  };
  
  increaseQuantity(items, index, id) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    let productAlreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === id) {
        cartItems[index].count += 1;
        productAlreadyInCart = true;
      }
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  decreaseQuantity(items, index, id) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    let productAlreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === id) {
        cartItems[index].count -= 1;

        productAlreadyInCart = true;
      }
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  removeFromCart = (id) => {
    if (localStorage.getItem("cartItems")) {
      const cartItems = JSON.parse(localStorage.getItem("cartItems"));
      cartItems.find((item) => {
        console.log(item);
        if (item.id === id) {
          let index = cartItems.indexOf(item);
          cartItems.splice(index, 1);
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
      });
    }
  };

  render() {
    let cartItems = [];
    let cartTerm = [];
    if (localStorage.getItem("cartItems")) {
      cartItems = JSON.parse(localStorage.getItem("cartItems"));
      if (localStorage.getItem("products")) {
        const products = JSON.parse(localStorage.getItem("products"));
        cartItems.map((item) => {
          products.find((product) => {
            if (product.id === item.id) {
              let itemTerm = {
                id: product.id,
                name: product.name,
                img: product.pics[0],
                unitPrice: product.price,
                quantity: item.quantity,
                totalPrice: item.total,
              };
              cartTerm.push(itemTerm);
            }
          });
        });
      }
    }

    return (
      <div className="alert alert-light">
        {cartTerm.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>
            You have {cartItems.length} items in the basket.{" "}
            <i className="fa fa-2x fa-shopping-cart"></i>
            <hr />
          </div>
        )}
        {cartTerm.length > 0 && (
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartTerm.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input
                            type="checkbox"
                            style={{ padding: "5px 10px" }}
                          ></input>
                        </td>
                        <td>{item.name}</td>
                        <td>
                          <img
                            src={item.img}
                            style={{ width: "100px", height: "80px" }}
                          />
                        </td>
                        <td>${item.unitPrice}</td>
                        <td>
                          <span
                            className="btn btn-primary"
                            style={{ margin: "2px" }}
                            onClick={this.decreaseQuantity(
                              item,
                              index,
                              item.id
                            )}
                          >
                            -
                          </span>
                          <span className="btn btn-info">{item.quantity}</span>
                          <span
                            className="btn btn-primary"
                            style={{ margin: "2px" }}
                            onClick={this.increaseQuantity(
                              item,
                              index,
                              item.id
                            )}
                          >
                            +
                          </span>
                        </td>
                        <td>${item.totalPrice}</td>
                        <td>
                          <button
                            className="badge badge-danger"
                            onClick={() => this.removeFromCart(item.id)}
                          >
                            {" "}
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan="4" style={{ fontWeight: "bold" }}>
                      Total Carts
                    </td>
                    <td style={{ fontWeight: "bold", color: "red" }}>
                      {util.formatCurrency(
                        cartItems.reduce((a, c) => a + c.price * c.count, 0)
                      )}{" "}
                    </td>
                    <td
                      className="btn btn-warning"
                      style={{ padding: "5px 15px" }}
                    >

                      
                      Book
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function TotalPrice(price, tonggia) {
  return Number(price * tonggia).toLocaleString("en-US");
}

export default Cart;
