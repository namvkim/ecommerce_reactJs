import React, { Component } from 'react';
import axios from 'axios';


class Dagiao extends Component {
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
    this.getPro(this.state.orders_details[0].id_pro)
  }

  render() {
    return (

      <div className="container">
        {  this.state.orders.map((orders) => {
          return (

            <div href="#demo" data-toggle="collapse">
              <table className="border col-sm-12 p-2 m-2">

                <tr style={{ color: 'white' }}>
                  <th>Tên user </th>
                  <th>Tên sản phẩm</th>
                  <th>Hình ảnh</th>
                  <th>Số lượng</th>
                  <th>Tổng</th>
                </tr>
                <tr id="demo" className="collapse">
                  <td>
                    {this.state.users.map((user) => {
                      return (
                        <p>{orders.id_user === user.id ? user.name : null}</p>
                      )
                    }
                    )
                    }
                  </td>
                  <td >
                    {this.state.products.map((products) => {
                      return (
                        <p>{orders.orders_details[0].id_pro === products.id ? products.name : null}</p>
                      )
                    }
                    )
                    }</td>
                  <td>
                    {this.state.products.map((products) => {
                      return (
                        <p>{orders.orders_details[0].id_pro === products.id ? <img src={products.pics[0]} width="80" height="60" /> : null}</p>
                      )
                    }
                    )
                    }
                  </td>
                  <td>{orders.orders_details[0].quantity}</td>
                  <td> {this.state.products.map((products) => {
                      return (
                        <p>{orders.orders_details[0].id_pro === products.id ? products.price *orders.orders_details[0].quantity: null}</p>
                      )
                    }
                    )
                    }</td>
                </tr>

              </table>
            </div>
          )
        })}
      </div>
    );
  }
}



export default Dagiao;