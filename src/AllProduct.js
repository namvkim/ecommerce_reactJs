import {Component} from 'react';
import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';

class Allproduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [],
      sort: true,
      title: "",
      img: "",
      price: ""
    }
    // this.getPro = this.getPro.bind(this);
    // this.postData = this.postData.bind(this);
  }

  getPro=(event)=> {
    let key = event.target.name;
    let value = event.target.value;
    let type=event.target.type;
    // if(type=="file"){
    //   value.name;
    //   value=arr[0];
    // }
    this.setState({[key]: value});
  }

  postData=(event)=> {
    event.preventDefault();
    var {id, title, img, price} = this.state;
      axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        data: {
          title: title,
          img: img,
          price: price
        }
      }).then( res =>{
        this.getData();
      }).catch(err=>{
        alert(err);
      });
  }

  getData=()=>{
    axios({
      method: 'GET',
      url: 'http://localhost:3000/products',
      data: null
    }).then( res =>{
      this.setState({products: res.data});
    }).catch(err=>{});
  }

  updateData =(i)=>{
    var products=this.state.products;
    this.setState({
      title:products[i].title,
      // img:products[id-1].img,
      price:products[i].price,
    })
    // if(id){
    //   axios({
    //     method: 'PUT',
    //     url: `http://localhost:3000/products/${id}`,
    //     data: {
    //       title: title,
    //       img: img,
    //       price: price
    //     }
    //   }).then( res =>{
    //       alert("Cap nhat thanh cong !");
    //   }).catch(err=>{});
    // }
  }

  deleteData =(id)=>{
    axios({
      method: 'DELETE',
      url: `http://localhost:3000/products/${id}`,
      data: null
    }).then( res =>{
        this.getData();
    }).catch(err=>{});
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    var {title, img, price} = this.state;
    return(
      <div>
        <form className="row g-3" style={{ backgroundImage: "linear-gradient(#CAE1FF, #BCD2EE)", margin: "30px", padding: "20px", borderRadius: "10px" }}>
          <div className="col-12">
                <input type="text" id="tit" name = "title" value={this.state.title} onChange={this.getPro} />
          </div>
          <div className="col-12">
                <input type="file" name = "img" value={this.state.img} onChange={this.getPro} />
          </div>
          <div className="col-12">
                <input type="text" name = "price" value={this.state.price} onChange={this.getPro} />
          </div>
          <div className="col-12">
              <button type="submit" className="btn btn-primary" onClick={this.postData}>
                  PostData
              </button>
          </div>
        </form>

        <form className="row g-3" style={{ backgroundImage: "linear-gradient(#CAE1FF, #BCD2EE)", margin: "30px", padding: "20px", borderRadius: "10px" }}>
          <div className="col-12">
                <input type="text" name = "title" value={this.state.title} onChange={this.getPro} />
          </div>
          <div className="col-12">
                <input type="text" name = "img" value={this.state.img} onChange={this.getPro} />
          </div>
          <div className="col-12">
                <input type="text" name = "price" value={this.state.price} onChange={this.getPro} />
          </div>
          <div className="col-12">
              <button type="button" className="btn btn-primary" onClick={this.updateData}>
                  UpdateData
              </button>
          </div>
        </form>
        {
        this.state.products.map(a=>{
          var i=0;
          return(
            <div>
               <p>{a.title}
                  <img src={a.img} alt="" width="50px" height="50px"/>
                  <button onClick={()=>this.updateData(i)}>update</button>
                  <button onClick={()=>this.deleteData(a.id)}>delete</button>
               </p>             
            </div>
          )
          i++;
        })}
      </div>
    )
  }
}

export default Allproduct;