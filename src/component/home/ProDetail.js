
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
                    <label><strong>Staus: </strong></label>
                    <p>{this.state.status} </p>
                  </div>
                  <div className="form-group">
                    <label><strong>Category: </strong></label>
                    <p>{this.state.category}</p>
                    
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


    );
  }
}




export default ProDetail;