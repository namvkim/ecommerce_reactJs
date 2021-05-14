import {Component} from 'react';
import axios from 'axios';


class ListProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [],
      // img:[],
      sort: true,
      // title: "",
      // img: "",
      // price: ""
      action:"ADD",
      id:"",
      name:"",
      price:"",
      describes:"",
      category:"",
      pic:"",
      status:""
    }
    // this.changeName = this.changeName.bind(this);
    // this.changePrice = this.changePrice.bind(this);
    // this.getPro = this.getPro.bind(this);
    // this.postData = this.postData.bind(this);
  }

  
  // Edit = (item,id)=>{
  //   this.setState({
  //     action:'UPDATE',
  //     name:item.name,
  //     price:item.price,
  //     pic:item.pic,
  //     describes:item.describes,
  //     id:id+1
  //   });
  //   //  
    
  //  }
  
 
  
  // updateItem = ()=>{
  //   // let data = this.state.products;
  //   // data.map((item,id)=>{
  //     this.state.products.map((item,id)=>{
  //             if(item.id===id){
  //               alert("hello2 "+id);
               
  //               item.name = this.state.name;
  //               item.category =this.state.category; 
  //               item.status=this.state.status;
  //               item.pic=this.state.pic;
  //               item.price = parseInt(this.state.price);
  //               item.describes = this.state.describes;
  //               axios({
  //                 method: 'PUT',
  //                 url:`http://localhost:3000/products/${id}`,
  //                 data:{
  //                   name:this.state.name,
  //                   price:this.state.price,
  //                   pic:this.state.pic,
  //                   category:this.state.category,
  //                   describes:this.state.describes
  //                 }
  //             }
  //             ).then (res =>{
  //               this.setState({
  //                 name:this.state.name,
  //                 price:this.state.price,
  //                 pic:this.state.pic,
  //                 category:this.state.category,
  //                 describes:this.state.describes,
  //                 action:'ADD'
  //              })
  //                 res.data = this.state.products;
  //             }).catch(err =>{
          
  //             })
  //             }
             
  //         }
  //     )
  //       }




onChange = (event) =>{
  var target = event.target;
  var name = target.name;
  var value = target.value;
  var type = target.type;

  if(type==="file")
  {
      value=this.pic.value.replace( /C:\\fakepath\\/i,"/images/");
  }
  this.setState(
    {
      [name]:value,
    }
  )
}


  postData=(event)=> {
    event.preventDefault();
    var { id, name, price, describes, category, pic} = this.state;
      axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        data: {
          id:id,
          name:name,
          pic:pic,
          price:price,
          describes:describes,
          category:category,
          status:"1"
          
         
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


  Edit = (item,id)=>{
    const product = this.setState({
       action:'UPDATE',
       name:item.name,
       pic:item.pic,
       price:item.price,
       category:item.category,
       describes:item.describes,
      
       id:id+1
       //loi
       
     }
     
     );
      alert(id);
   }
   
   updateItem = ()=>{
     let data = this.state.products;
     data.map((item,id)=>{
               if(this.state.id===id){
                 alert("hello" +id);
                 item.name = this.state.name;
                 item.pic = this.state.pic;
                 //this.state.index=this.state.index+1;
                 item.price = parseInt(this.state.price);
                 item.category = this.state.category
                 alert("Sửa thành công!");
                 axios({
                   method: 'PUT',
                   url:`http://localhost:3000/products/${id}`,
                   data:{
                     name:this.state.name,
                     pic:this.state.pic,
                     price:this.state.price,
                     describes:this.state.describes,
                     category:this.state.category
                   }
               }).then (res =>{
                 
                 this.setState({
                  products:data,
                   name:"",
                      pic:"",
                      price:"",
                      describes:"",
                      category:"",
                   action:'ADD'
                })
                   res.data = this.state.products;
                   
               }).catch(err =>{
           
               })
               }
           }
       )
     //set update items
     this.setState({
        products:data,
        name:"",
           pic:"",
           price:"",
           category:"",
           describes:"",
        action:'ADD'
     })
      
   }





  render() {
    return(
      <div className=" class_pro">

      <div class="main-w3layouts-agileinfo class_pro_post">
						<div class="wthree-form">
							<h2>{this.state.action}</h2>
							<form  >
								<div class="form-sub-w3">
									<input type="text" name="name" placeholder="Tên sản phẩm " value={this.state.name} onChange={this.onChange}  required="" />
								
								</div>
								<div class="form-sub-w3">
									<input type="number" name="price" placeholder="Giá" value={this.state.price} onChange={this.onChange} required="" />
								</div>
                <div class="form-sub-w3">
									<input type="file" name="pic" ref={(input) =>{this.pic = input}} placeholder="" value={this.state.img} onChange={this.onChange}  required="" />
								</div>
                <div class="form-sub-w3 class_pro_radio" >

                <div class="form-check-inline">
                    <label class="form-check-label" for="category1" style={{color: '#AAAAAA'}}>
                      <input type="radio" class="form-check-input"  id="category1"  onChange={this.onChange}   name="category" value="1" />Loại 1
                    </label>
                  </div>
                  <div class="form-check-inline">
                    <label class="form-check-label" for="category2" style={{color: '#AAAAAA'}}>
                      <input type="radio" class="form-check-input" id="category2"  onChange={this.onChange}   name="category" value="2" />Loại 2
                    </label>
                  </div>
                  

								</div>
                <div class="form-sub-w3">
									<input type="text" name="describes" placeholder="Mô tả" value={this.state.describes} onChange={this.onChange}  required="" />
								</div>

								 
								<div class="clear"></div>
								<div class="submit-agileits">
               
									<input type="submit" value={this.state.action==='ADD'?"Post":"Save"}   onClick={this.state.action==='ADD'?this.postData:this.updateItem} />
								</div>
							</form>

						</div>

		</div>
    <div class="clear">

    </div>
                      <div class=" class_pro_post ">
                          <div className="example">
                          <div className=" class_pro_content ">
                          <table  className=" border col-sm-12 p-2 ">
                        <tr className="border">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Picture</th>                                    
                            <th>Category</th>
                            {/* <th>Status</th> */}
                            <th>Describes</th>
                            <th>Action</th>
                        </tr>
                                {this.state.products.map((pro, index) => {
                        return (
                            
                                <tr>
                                    <td>{pro.id}</td>
                                    <td>{pro.name}</td>
                                    <td>{pro.price}</td>
                                    <td>
                                        <img src={pro.pic}  width="100px" />
                                    </td>
                                    <td>{pro.category}</td>
                                    {/* <td>{pro.status==(!0)?"Còn":"Hết"}</td> */}
                                    <td>{pro.describess}</td>
                                    <td > 
                                    <a onClick={()=>this.Edit(pro,index)}> <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_settings_48px-512.png"width="35px" height="35px" /></a>
                                    <a onClick={()=>this.deleteData(pro.id)}> <img src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_36-512.png"width="35px" height="35px" /></a>

                                    </td>
                                </tr>
                                  
                                   );})}
                                 </table>
                          </div>
                          </div>
                      </div>

      </div>
    )
  }
}

export default ListProduct;