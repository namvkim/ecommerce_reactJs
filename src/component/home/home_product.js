import React, { Component } from "react";
import axios from "axios";

class Home_product extends Component {
  url_products = "http://localhost:3000/products";

  constructor(props) {
    super(props);
    this.state = {
      products: [],
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
      })
      .catch((err) => {
        alert(err);
      });
  }

  componentDidMount() {
    this.callAPI(this.url_products, "GET", "");
  }

  render() {
    let products_food = this.state.products.map((product, index) => {
      if (product.status ===1 && product.category===1)
        return (
          <div className="index_tab-pane_row" key={index}>
            <div className="index_tab-pane_row_left">
              <img src={product.pic} alt="" />
              <p className="index_tab-pane_name">{product.name}</p>
            </div>
            <div className="index_tab-pane_row_right">
              <p className="index_tab-pane_price">{product.price} VND</p>
              <button className="index_tab-pane_btn">Add</button>
            </div>
          </div>
        );
    });

    let products_drink = this.state.products.map((product, index) => {
      if (product.status ===1 && product.category===2)
        return (
          <div className="index_tab-pane_row" key={index}>
            <div className="index_tab-pane_row_left">
              <img src={product.pic} alt="" />
              <p className="index_tab-pane_name">{product.name}</p>
            </div>
            <div className="index_tab-pane_row_right">
              <p className="index_tab-pane_price">{product.price} VND</p>
              <button className="index_tab-pane_btn">Add</button>
            </div>
          </div>
        );
    });

    return (
      <div className="index_content_menu">
        <div className="index_content_menu_title">
          <img
            src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/orange_travelpictdinner_1484336833.png"
            alt=""
          />
          <h4>Menu</h4>
        </div>
        <div className="bd-example bd-example-tabs">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active show"
                id="pills-hot-tab"
                data-toggle="pill"
                href="#pills-hot"
                role="tab"
                aria-controls="pills-hot"
                aria-selected="true"
              >
                Hot
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-food-tab"
                data-toggle="pill"
                href="#pills-food"
                role="tab"
                aria-controls="pills-food"
                aria-selected="false"
              >
                Food
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-drink-tab"
                data-toggle="pill"
                href="#pills-drink"
                role="tab"
                aria-controls="pills-drink"
                aria-selected="false"
              >
                Drink
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-discount-tab"
                data-toggle="pill"
                href="#pills-discount"
                role="tab"
                aria-controls="pills-discount"
                aria-selected="false"
              >
                Discount
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-new-tab"
                data-toggle="pill"
                href="#pills-new"
                role="tab"
                aria-controls="pills-new"
                aria-selected="false"
              >
                New
              </a>
            </li>
          </ul>
          <hr style={{ border: "1px solid yellow" }} />
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="pills-hot"
              role="tabpanel"
              aria-labelledby="pills-hot-tab"
            >
              <div className="index_tab-pane_row">
                <div className="index_tab-pane_row_left">
                  <img
                    src="http://file.hstatic.net/1000372427/file/do-an-vat-cho-quan-ca-phe-tra-sua-da-nang-3_48bd4294795b43148d026b8e11c8d3d0.jpg"
                    alt=""
                  />
                  <p className="index_tab-pane_name">Phô mai</p>
                </div>
                <div className="index_tab-pane_row_right">
                  <p className="index_tab-pane_price">200.000 VND</p>
                  <button className="index_tab-pane_btn">Add</button>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-food"
              role="tabpanel"
              aria-labelledby="pills-food-tab"
            >
              {products_food}
            </div>
            <div
              className="tab-pane fade"
              id="pills-drink"
              role="tabpanel"
              aria-labelledby="pills-drink-tab"
            >
              {products_drink}
            </div>
            <div
              className="tab-pane fade"
              id="pills-discount"
              role="tabpanel"
              aria-labelledby="pills-discount-tab"
            >
              <div className="index_tab-pane_row">
                <div className="index_tab-pane_row_left">
                  <img
                    src="http://file.hstatic.net/1000372427/file/do-an-vat-cho-quan-ca-phe-tra-sua-da-nang-3_48bd4294795b43148d026b8e11c8d3d0.jpg"
                    alt=""
                  />
                  <p className="index_tab-pane_name">Phô mai</p>
                </div>
                <div className="index_tab-pane_row_right">
                  <p className="index_tab-pane_price">200.000 VND</p>
                  <button className="index_tab-pane_btn">Add</button>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-new"
              role="tabpanel"
              aria-labelledby="pills-new-tab"
            >
              <div className="index_tab-pane_row">
                <div className="index_tab-pane_row_left">
                  <img
                    src="http://file.hstatic.net/1000372427/file/do-an-vat-cho-quan-ca-phe-tra-sua-da-nang-3_48bd4294795b43148d026b8e11c8d3d0.jpg"
                    alt=""
                  />
                  <p className="index_tab-pane_name">Phô mai</p>
                </div>
                <div className="index_tab-pane_row_right">
                  <p className="index_tab-pane_price">200.000 VND</p>
                  <button className="index_tab-pane_btn">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home_product;
