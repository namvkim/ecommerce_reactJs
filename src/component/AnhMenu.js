import React, {Component} from 'react';
import axios from 'axios';


class AnhMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
          products : [],
          sort: true,
          id:"",
          pic: ""
          
        }
      }

      getData=()=>{
        axios({
          method: 'GET',
          url: 'http://localhost:3000/admin_index',
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
            <div>
                {this.state.products.map(a=>{
                    return(
                        <div><img src={a.pic} alt="" width="100px" height="100px"/></div>
                    //     <div className="index_content_advan">
                    //     <div className="index_content_advan_img1" id="content_advan_img1" />
                    //     <div className="index_content_advan_img2">
                    //       <div className="index_content_advan_img2_1">
                    //         <div className="index_content_advan_img2_1_1" id="content_advan_img2_1_1">
                    //         </div>
                    //         <div className="index_content_advan_img2_1_2" id="content_advan_img2_1_2">
                    //         </div>
                    //       </div>
                    //       <div className="index_content_advan_img2_2">
                    //         <div className="index_content_advan_img2_2_1" id="content_advan_img2_2_1">
                    //         </div>
                    //         <div className="index_content_advan_img2_2_2" id="content_advan_img2_2_2">
                    //         </div>
                    //       </div>
                    //     </div>
                    //     <div className="index_content_advan_img3" id="content_advan_img3" />
                    //   </div>

                    )
                })}
               
            </div>
        );
    }
}
export default AnhMenu;