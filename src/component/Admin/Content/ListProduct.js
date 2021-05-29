import { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, NavLink, Switch, Link } from "react-router-dom";


class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sort: true,
      action: "ADD",
      id: "",
      name: "",
      price: "",
      describes: "",
      category: "",
      pics: [],
      status: ""
    }
   
  }




  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    var type = target.type;

    if (type === "file") {
      value = this.pics.value.replace(/C:\\fakepath\\/i, "/images/");
    }
    this.setState(
      {
        [name]: value,
      }
    )
  }


  postData = (event) => {
    event.preventDefault();
    var { id, name, price, describes, category, pics } = this.state;
    axios({
      method: 'POST',
      url: 'http://localhost:3000/products',
      data: {
        id: id,
        name: name,
        pics: pics,
        price: price,
        describes: describes,
        category: category,
        status: "1"


      }


    }).then(res => {
      this.getData();
    }).catch(err => {
      alert(err);
    });

  }


  getData = (id) => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/products',
      data: { id: id + 1 }
    }).then(res => {
      this.setState({ products: res.data });
    }).catch(err => { });
  }



  deleteData = (id) => {
    axios({
      method: 'DELETE',
      url: `http://localhost:3000/products/${id}`,
      data: null
    }).then(res => {
      this.getData();
    }).catch(err => { });
  }

  componentDidMount() {
    this.getData();
   
  }


  Edit = (item, index) => {
    const product = this.setState({
      action: 'UPDATE',
      name: item.name,
      pics: item.pics,
      price: item.price,
      category: item.category,
      describes: item.describes,
      id: item.id
    }

    );
  }

  updateItem = () => {
    
    axios({
      method: 'PUT',
      url: `http://localhost:3000/products/${this.state.id}`,
      data: {
        name: this.state.name,
        pics: this.state.pic,
        price: this.state.price,
        describes: this.state.describes,
        category: this.state.category
      }
    }).then(res => {
      this.setState({
        name: "",
        pics: "",
        price: "",
        describes: "",
        category: "",
        action: 'ADD'
      })

    }).catch(err => {

    })
  }








render() {
  var i = 0;
  return (
    <div className=" class_pro">

      <div class="main-w3layouts-agileinfo class_pro_post">
        <div class="wthree-form">
          <h2>{this.state.action} PRODUCT</h2>
          <form onSubmit={this.onSave}>
            <div class="form-sub-w3">
              <input type="text" name="name" placeholder="Tên sản phẩm " value={this.state.name} onChange={this.onChange} required="" />

            </div>
            <div class="form-sub-w3">
              <input type="number" name="price" placeholder="Giá" value={this.state.action==='UPDATE'?this.state.price:null} onChange={this.onChange} required="" />
            </div>
            <div class="form-sub-w3">
              <input type="file" name="pics" ref={(input) => { this.pics= input }}  placeholder="" onChange={this.onChange} required="" />
            </div>
            <div class="form-sub-w3 class_pro_radio" >

              <div class="form-check-inline">
                <label class="form-check-label" for="category1" style={{ color: '#AAAAAA' }}>
                  <input type="radio" class="form-check-input" id="category1" onChange={this.onChange} name="category" value="1" />Loại 1
                    </label>
              </div>
              <div class="form-check-inline">
                <label class="form-check-label" for="category2" style={{ color: '#AAAAAA' }}>
                  <input type="radio" class="form-check-input" id="category2" onChange={this.onChange} name="category" value="2" />Loại 2
                    </label>
              </div>


            </div>
            <div class="form-sub-w3">
              <input type="text" name="describes" placeholder="Mô tả" value={this.state.describes} onChange={this.onChange} required="" />
            </div>
            <div class="clear"></div>
            <div class="submit-agileits">
              <input type="submit" value={this.state.action === 'ADD' ? "Post" : "Save"} onClick={this.state.action === 'ADD' ? this.postData : this.updateItem} />
            </div>
          </form>

        </div>

      </div>
      <div class="clear">

      </div>
      <div class=" class_pro_post ">
        <div className="example">
          <div className=" class_pro_content ">
            <table className=" border col-sm-12 p-2 ">
              <tr className="border">
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Picture</th>
                <th>Category</th>
                {/* <th>Status</th> */}
                <th>Action</th>
              </tr>
              {  this.state.products.map((pro, index) => {
                i++;
                return (

                  <tr>
                    <td>{i}</td>
                    <td>{pro.name}</td>
                    <td>{pro.price}</td>
                    <td>
                      <img src={pro.pics[0]} width="100px" />
                    </td>
                    <td>{pro.category===1?"Food":"Drink"}</td>
                    <td >
                      <a onClick={() => this.Edit(pro, index)}> <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_settings_48px-512.png" width="35px" height="35px" /></a>
                      <a onClick={() => this.deleteData(pro.id)}> <img src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_36-512.png" width="35px" height="35px" /></a>

                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}
}




export default ListProduct;