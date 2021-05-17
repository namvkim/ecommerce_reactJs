import React, { Component } from 'react';


class Dagiao extends Component {
    constructor(props) {
        super(props);
        this.state = {
          order: [],
          sort: true,
          id: "",
          name: "",
          price: "",
          describes: "",
          category: "",
          pic: "",
          status: ""
        }
    }

 
    componentDidMount() {

    }

    render() {
        return (
            
<div className="container">
  <a href="#demo" className="btn " data-toggle="collapse">
  <table className="border col-sm-12 p-2 m-2">
          <td>aaaa</td>
          <td>b</td><td>c</td>
      </table>
  </a>
  <div id="demo" className="collapse">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
  <div>
      
  </div>
</div>
        );
    }
}



export default Dagiao;