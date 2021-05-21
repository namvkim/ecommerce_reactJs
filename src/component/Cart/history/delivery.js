import React, { Component } from 'react';
import axios from "axios";

class Delivery extends Component {
  url = "http://localhost:3000/orders";

  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  callAPI(url_api, method, body) {
    axios({
      method: method,
      url: url_api,
      data: body,
    })
      .then((res) => {
        this.setState({ results: res.data });
      })
      .catch((err) => {
        alert(err);
      });
  }

  componentDidMount() {
    this.callAPI(this.url, "GET", "");
  }

  render() {
    var user = JSON.parse(localStorage.getItem("user"));
    var products = JSON.parse(localStorage.getItem("products"));
    var i = 1;
    let element = this.state.results.map((result, index) => {
      if (user.id === result.id_user && result.status === 2) {
        var total = 0;
        var product_result;
        var j=1;
        var element_details = result.orders_details.map((row,index) => {
          products.map((product) => {
            if (product.id === row.id_pro) product_result=product;
          });
          total += row.quantity * product_result.price;
          return (
            <tr key={index}>
              <td>{j++}</td>
              <td>{product_result.name}</td>
              <td>
                <img
                  src={product_result.pics[0]}
                  height="50px"
                ></img>
              </td>
              <td>{row.quantity}</td>
              <td>{product_result.price}</td>
            </tr>
          );
        });
        return (
          <tr key={index}>
            <td>{i++}</td>
            <td>{total}</td>
            <td>{result.date}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                Details
              </button>
              <div
                className="modal fade bd-example-modal-lg"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content his_color">
                    <table className="tbl_his2">
                      <tbody>
                        <tr>
                          <th>STT</th>
                          <th>Name</th>
                          <th>Image</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                        {element_details}
                        <tr>
                          <td>Total</td>
                          <td colSpan="4">{total}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        );
      }
    });

    return (
      <table className="tbl_his1">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Total</th>
            <th>Date</th>
            <th>Details</th>
          </tr>
          {element}
        </tbody>
      </table>
    );
  }
}

export default Delivery;
