import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
          products : [],
          sort: true,
          id:"",
          name:"",
          price:"",
          pic: "",
          describes:"",
          category:"",
          status:""
          
        }
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
      
    
      
      componentDidMount(){
        this.getData();
      }
    
    render() {
      
        return (
          
        <div className="layout_body">
        <div className="layout_content">
          <div className="index_content_advan">
            <div className="index_content_advan_img1" id="content_advan_img1" />
            <div className="index_content_advan_img2">
              <div className="index_content_advan_img2_1">
                <div className="index_content_advan_img2_1_1" id="content_advan_img2_1_1">
                </div>
                <div className="index_content_advan_img2_1_2" id="content_advan_img2_1_2">
                </div>
              </div>
              <div className="index_content_advan_img2_2">
                <div className="index_content_advan_img2_2_1" id="content_advan_img2_2_1">
                </div>
                <div className="index_content_advan_img2_2_2" id="content_advan_img2_2_2">
                </div>
              </div>
            </div>
            <div className="index_content_advan_img3" id="content_advan_img3" />
          </div>
          <div className="index_content_info">
            <div className="index_content_info_title">
              <img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/orange_travelpictdinner_1484336833.png" alt="" />
              <h4>Maybe you don't know ?</h4>
            </div>
            <div className="index_content_info_main">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut iste culpa, quaerat quod tenetur aspernatur atque veniam tempora eaque? Dignissimos delectus itaque sunt, harum quo repudiandae assumenda atque sed inventore quasi? Modi est deleniti
              qui quos. Obcaecati quos quibusdam quis nostrum dicta. Maiores quo, neque eaque doloribus fugiat minus.
            </div>
          </div>
          <div className="index_content_menu">
            <div className="index_content_menu_title">
              <img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/orange_travelpictdinner_1484336833.png" alt="" />
              <h4>Menu</h4>
            </div>
            <div className="bd-example bd-example-tabs">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active show" id="pills-hot-tab" data-toggle="pill" href="#pills-hot" role="tab" aria-controls="pills-hot" aria-selected="true">Hot</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-food-tab" data-toggle="pill" href="#pills-food" role="tab" aria-controls="pills-food" aria-selected="false">Food</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-drink-tab" data-toggle="pill" href="#pills-drink" role="tab" aria-controls="pills-drink" aria-selected="false">Drink</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-discount-tab" data-toggle="pill" href="#pills-discount" role="tab" aria-controls="pills-discount" aria-selected="false">Discount</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-new-tab" data-toggle="pill" href="#pills-new" role="tab" aria-controls="pills-new" aria-selected="false">New</a>
                </li>
              </ul>
              <hr style={{border: '1px solid yellow'}} />
              <div>
        {
        this.state.products.map(a=>{
            
            return(
              <div>
              <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade active show" id="pills-hot" role="tabpanel" aria-labelledby="pills-hot-tab">
                            <div className="index_tab-pane_row">
                                <div className="index_tab-pane_row_left">
                                    <img src={a.pic} alt="" width="100px" height="100px"/>
                                    <p className="index_tab-pane_name">{a.name}</p>
                                </div>
                                <div className="index_tab-pane_row_right">
                                    <p className="index_tab-pane_price">{a.price}<sup>d</sup></p>
                                    <button className="index_tab-pane_btn">Add</button>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-food" role="tabpanel" aria-labelledby="pills-food-tab">
                            <div className="index_tab-pane_row">
                                <div className="index_tab-pane_row_left">
                                    <img src={a.pic} alt="" width="100px" height="100px"/>
                                    <p className="index_tab-pane_name">{a.name}</p>
                                </div>
                                <div className="index_tab-pane_row_right">
                                    <p className="index_tab-pane_price">{a.price}</p>
                                    <button className="index_tab-pane_btn">Add</button>
                                    <button className="index_tab-pane_btn">Detail</button>
                                    {/* <span><Link to={`/${this.props.products.id}/4`} className="btn btn-danger" >Detail <i className="fa fa-chevron-right" /></Link></span> */}
                                    {/* <Link to={`/${this.props.products.id}/4`}></Link> */}
                                    {/* <span><Link to={`/${this.props.products.id}/4`} className="btn btn-danger" >Detail <i className="fa fa-chevron-right" /></Link></span> */}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-drink" role="tabpanel" aria-labelledby="pills-drink-tab">
                            <div className="index_tab-pane_row">
                                <div className="index_tab-pane_row_left">
                                    <img src={a.pic} alt="" width="100px" height="100px"/>
                                    <p className="index_tab-pane_name">{a.name}</p>
                                </div>
                                <div className="index_tab-pane_row_right">
                                    <p className="index_tab-pane_price">{a.price}</p>
                                    <button className="index_tab-pane_btn">Add</button>
                                    <button className="index_tab-pane_btn">Detail</button>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-discount" role="tabpanel" aria-labelledby="pills-discount-tab">
                            <div className="index_tab-pane_row">
                                <div className="index_tab-pane_row_left">
                                    <img src={a.pic} alt="" width="100px" height="100px"/>
                                    <p className="index_tab-pane_name">{a.name}</p>
                                </div>
                                <div className="index_tab-pane_row_right">
                                    <p className="index_tab-pane_price">{a.price}</p>
                                    <button className="index_tab-pane_btn">Add</button>
                                    <button className="index_tab-pane_btn">Detail</button>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-new" role="tabpanel" aria-labelledby="pills-new-tab">
                            <div className="index_tab-pane_row">
                                <div className="index_tab-pane_row_left">
                                    <img src={a.pic} alt="" width="100px" height="100px"/>
                                    <p className="index_tab-pane_name">{a.name}</p>
                                </div>
                                <div className="index_tab-pane_row_right">
                                    <p className="index_tab-pane_price">{a.price}</p>
                                    <button className="index_tab-pane_btn">Add</button>
                                    <button className="index_tab-pane_btn">Detail</button>
                                </div>
                            </div>
                        </div>
              </div>                
            </div>
            )

            
        }
        )
        }
      </div> 
            </div>
              
            </div>
          </div>
        </div>
        );
    }
}
export default Content;