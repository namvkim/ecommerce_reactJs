import React, { Component } from "react";
import axios from "axios";

class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      sort: true,
      name: "",
      pass: "",
      phone: "",
      email: "",
      address: "",
      status: "0",
    };
  }

  Block = (id) => {
    var name = "";
    var pass = "";
    var phone = "";
    var email = "";
    var address = "";
    var status = 1;
    let data = this.state.users;
    data.map((key, index) => {
      if (key.id === id) {
        name = key.name;
        pass = key.pass;
        phone = key.phone;
        email = key.email;
        address = key.address;
        status = 0;
      }
    });
    axios({
      method: "PUT",
      url: `http://localhost:3000/users/${id}`,
      data: {
        name: name,
        pass: pass,
        phone: phone,
        email: email,
        address: address,
        status: 0,
      },
    })
      .then((res) => {
        this.setState({
          users: data,
          name: name,
          pass: pass,
          phone: phone,
          email: email,
          address: address,
          status: 0,
        });
        res.data = this.state.users;
        this.getData();
      })
      .catch((err) => {
        alert("Không thành công");
      });
  };

  UnBlock = (id) => {
    var name = "";
    var pass = "";
    var phone = "";
    var email = "";
    var address = "";
    var status = 1;
    let data = this.state.users;
    data.map((key, index) => {
      if (key.id === id) {
        name = key.name;
        pass = key.pass;
        phone = key.phone;
        email = key.email;
        address = key.address;
        status = 1;
      }
    });
    axios({
      method: "PUT",
      url: `http://localhost:3000/users/${id}`,
      data: {
        name: name,
        pass: pass,
        phone: phone,
        email: email,
        address: address,
        status: 1,
      },
    })
      .then((res) => {
        this.setState({
          users: data,
          name: name,
          pass: pass,
          phone: phone,
          email: email,
          address: address,
          status: 1,
        });
        res.data = this.state.users;
        this.getData();
      })
      .catch((err) => {
        alert("Không thành công");
      });
  };

  getData = () => {
    axios({
      method: "GET",
      url: "http://localhost:3000/users",
      data: null,
    })
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {});
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <React.Fragment>
        <div className="layout_body ">
          <div className="book_content_user">
            <div className="example_user white">
              {/* <div className=" content"> */}

              <table className="border col-sm-11 p-2 m-2">
                <tbody>
                <tr className="border">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Pass</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
                {this.state.users.map((us, index) => {
                  return (
                    <tr className="tr" key={index}>
                      <td>{us.id}</td>
                      <td>{us.name}</td>
                      <td>{us.pass}</td>
                      <td>{us.phone}</td>
                      <td>{us.email}</td>
                      <td>{us.address}</td>
                      <td>
                        {" "}
                        {us.status === 1 ? (
                          <button
                            type="submit"
                            className="btn btn-success"
                            onClick={() => this.Block(us.id)}
                          >
                            Block
                          </button>
                        ) : (
                          <button
                            type="submit"
                            onClick={() => this.UnBlock(us.id)}
                            className="btn btn-danger"
                          >
                            Unblock
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default UserManagement;
