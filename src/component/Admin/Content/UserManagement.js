import React, { Component } from "react";
import axios from "axios";

class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      sort: true,
      id: "",
      name: "",
      pass: "",
      phone: "",
      email: "",
      address: "",
      status: "",
    };
  }
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
            <div className="example_user">
              <table className="border col-sm-11 p-2 m-2">
                <tr className="border">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Pass</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
                {this.state.users.map((us) => {
                  return (
                    <tr className="tr">
                      <td>{us.id}</td>
                      <td>{us.name}</td>
                      <td>{us.pass}</td>
                      <td>{us.phone}</td>
                      <td>{us.email}</td>
                      <td>{us.address}</td>
                      <td>
                        {" "}
                        {us.status === !1 ? (
                          <button type="button" className="btn btn-success">
                            UnBlock
                          </button>
                        ) : (
                          <button type="button" className="btn btn-danger">
                            Block
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserManagement;
