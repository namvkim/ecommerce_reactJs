import React, { Component } from "react";
import util from "../../util";

class Booking extends Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    return (
      <div className="row" style={{ color: "blue" }}>
        <div className="col-md-5 col-sm-5">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h4 style={{ color: "red" }}> Thông tin giao hàng</h4>
            </div>
            <div className="panel-body">
              <form name="form" method="post">
                <div className="form-group">
                  <label style={{ color: "black" }}>
                    Email <span style={{ color: "red" }}> * </span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label style={{ color: "black" }}>
                    Address <span style={{ color: "red" }}> * </span>
                  </label>
                  <input
                    name="text"
                    type="text"
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label style={{ color: "black" }}>
                    Phone Number <span style={{ color: "red" }}> * </span>{" "}
                  </label>
                  <input
                    name="phone"
                    type="text"
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label style={{ color: "black" }}>
                    Hình thức thanh toán{" "}
                    <span style={{ color: "red" }}> * </span>{" "}
                  </label>
                  <select style={{ color: "black" }}>
                    <option style={{ color: "black" }}>
                      Thanh toán bằng tiền mặt
                    </option>
                    <option style={{ color: "black" }}>
                      Thanh toán bằng hình thức chuyển khoản
                    </option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-7 col-sm-7">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h4 style={{ color: "red" }}> Thông tin sản phẩm</h4>
            </div>
            <div className="panel-body">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ color: "black" }}>Name</th>
                    <th style={{ color: "black" }}>Price</th>
                    <th style={{ color: "black" }}>Quantity</th>
                    <th style={{ color: "black" }}>Total Price</th>
                    <th style={{ color: "black" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td style={{ color: "black" }}>{item.title}</td>

                        <td style={{ color: "black" }}>{item.price} $</td>
                        <td style={{ color: "black" }}>{item.count}</td>
                        <td style={{ color: "black" }}>
                          {TotalPrice(item.price, item.count)} $
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td
                      colSpan="3"
                      style={{ fontWeight: "bold" }}
                      style={{ color: "black" }}
                    >
                      Total Carts
                    </td>
                    <td
                      style={{ fontWeight: "bold", color: "red" }}
                      style={{ color: "black" }}
                    >
                      {" "}
                      <b style={{ color: "black" }}>
                        {util.formatCurrency(
                          cartItems.reduce((a, c) => a + c.price * c.count, 0)
                        )}
                      </b>{" "}
                    </td>
                  </tr>

                  <tr>
                    <td></td>

                    <td colSpan="2">
                      <button
                        className="btn btn-info"
                        style={{
                          width: "10rem",
                          borderRadius: 20,
                          margin: "auto auto",
                        }}
                        onClick={() =>
                          alert("Thank you so much. You book successfully")
                        }
                      >
                        {" "}
                        Payment
                      </button>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function TotalPrice(price, tonggia) {
  return Number(price * tonggia).toLocaleString("en-US");
}

export default Booking;
