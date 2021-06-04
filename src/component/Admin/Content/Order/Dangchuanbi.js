import React, { Component } from "react";
import axios from "axios";

class Dangchuanbi extends Component {
  url = "http://localhost:3000/orders";
  url_user = "http://localhost:3000/users";

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      users: [],
      load:true,
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
  callAPI2(url_api, method, body) {
    axios({
      method: method,
      url: url_api,
      data: body,
    })
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        alert(err);
      });
  }

  componentDidMount() {
    this.callAPI2(this.url_user, "GET", "");
    this.callAPI(this.url, "GET", "");
  }

  confirm=(ressult)=>{
    axios({
      method: 'PUT',
      url: `http://localhost:3000/orders/${ressult.id}`,
      data: {         
        id: ressult.id,
        id_user: ressult.id_user,
        date: ressult.date,
        address: ressult.address,
        status: 2,
        orders_details: ressult.orders_details
      }        
    }).then((res) => {
      window.location.reload();
    });
  }

  render() {
    var products = JSON.parse(localStorage.getItem("products"));
    var i = 1;
    let element = this.state.results.map((result, index) => {
      if (result.status === 1) {
        var total = 0;
        var product_result;
        var j = 1;
        var us = this.state.users.find(row3=>row3.id===result.id_user);
        var element_details = result.orders_details.map((row, index) => {
          products.map((product) => {
            if (product.id === row.id_pro) product_result = product;
          });
          total += row.quantity * product_result.price;
          return (
            <tr key={index}>
              <td>{j++}</td>
              <td>{product_result.name}</td>
              <td>
                <img src={product_result.pics[0]} height="50px"></img>
              </td>
              <td>{row.quantity}</td>
              <td>{product_result.price}</td>
            </tr>
          );
        });
        return (
          <tr key={index}>
            <td>{i++}</td>
            <td>{us.name}</td>
            <td>{total}</td>
            <td>{result.address}</td>
            <td>{result.date}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target={".bd-example-modal-lg" + i}
              >
                Details
              </button>
              <div
                className={"modal fade bd-example-modal-lg" + i}
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
            <td className="btn_xn">
              <button type="button" onClick={()=>this.confirm(result)} className="btn btn-success">
                Confirm
              </button>
            </td>
          </tr>
        );
      }
    });

    return (
      <div className="layout_body">
        <div className="book_content_user">
          <table className="col-12">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Total</th>
                <th>Address</th>
                <th>Date</th>
                <th>Details</th>
                <th>Confirm</th>
              </tr>
              {element}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Dangchuanbi;
