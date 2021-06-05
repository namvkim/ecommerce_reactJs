import React, { Component } from "react";
import axios from "axios";

class Recruiment extends Component {
  url_products = "http://localhost:3000/products";

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: "",
      name: "",
      price: "",
      pics: "",
      describes: "",
      kt: "",
    };
  }

  callAPI(url_api, method, body) {
    axios({
      method: method,
      url: url_api,
      data: body,
    })
      .then((res) => {
        this.setState({ products: res.data });
        localStorage.setItem("products", JSON.stringify(res.data));
      })
      .catch((err) => {
        alert(err);
      });
  }

  componentDidMount() {
    this.callAPI(this.url_products, "GET", "");
  }
  addToCart = (product) => {
    let itemAdd = {
      id: product.id,
      quantity: 1,
      unitPrice: product.price,
      checked: true,
    };
    var arr = [];
    if (localStorage.getItem("cartItems")) {
      arr = JSON.parse(localStorage.getItem("cartItems"));
      const item = arr.find((item) => item.id === product.id);
      if (item) {
        let itemTerm = item;
        let index = arr.indexOf(item);
        itemTerm.quantity += 1;
        arr[index] = itemTerm;
        localStorage.setItem("cartItems", JSON.stringify(arr));
      } else {
        arr.push(itemAdd);
        localStorage.setItem("cartItems", JSON.stringify(arr));
      }
    } else {
      arr.push(itemAdd);
      localStorage.setItem("cartItems", JSON.stringify(arr));
    }
  };

  detail = (id) => {
    this.setState({ kt: id });
  };
  render() {
    return (
      <React.Fragment>
        <div className="example">
          <h3 style={{ color: "black" }} className="mt-3">ALL DELICIOUS FOODS</h3>
          <div className="row p-4">
            <div className="row">
              <div className="col-md-6 beta-products-details">
                <p className="pull-left t"></p>
              </div>
            </div>
            {this.state.products.map((product, index) => {
              return <Item key={index} product={product} />;
            })}
          </div>
        </div>

        <div>
          {this.state.products.map((pro, index) => {
            if (pro.id === this.state.kt)
              return (
                <div
                  className="modal fade"
                  id="exampleModalCenter"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                  key={index}
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content-detail">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                          {pro.name}
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body a">
                        <div className="modal_detail">
                          <img
                            src={pro.pics[0]}
                            alt=""
                            width="200"
                            height="200"
                          />
                          <p className="modal_detail_center">{pro.price} VND</p>
                          <button
                            className="index_tab-pane_btn"
                            onClick={() => this.addToCart(pro)}
                          >
                            Add to cart
                          </button>
                        </div>
                        <div className="modal_detail example_detail">
                          {pro.describes}
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      </React.Fragment>
    );
  }
}

class Item extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row khoangcach">
          <div className="card" style={{ width: "300px" }}>
            <img
              className="card-img-top"
              src={this.props.product.pics[0]}
              alt="Card image"
              style={{ width: "100%", height: "250px" }}
            />

            <div className="card-body">
              <h4 className="card-title">{this.props.product.name}</h4>
              <p className="card-text">{this.props.product.price}$</p>
              <button
                className="index_tab-pane_btn"
                onClick={() => this.addToCart(this.props.product)}
              >
                {" "}
                Add to cart
              </button>
              <button
                onClick={() => this.detail(this.props.product.id)}
                className="btn index_tab-pane_btn "
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Detail
              </button>
            </div>
            <p></p>
            <br></br>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Recruiment;
