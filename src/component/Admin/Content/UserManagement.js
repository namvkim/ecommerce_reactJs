import React, { Component } from 'react';
import axios from 'axios';


class UserManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : [],
            sort: true,
            // title: "",
            // img: "",
            // price: ""
            id:"",
            name:"",
            pass:"",
            phone:"",
            email:"",
            address:"",
            status:""
          }
    }
    // Block=()=>{
    //     axios({
    //         method: 'POST',
    //         url: 'http://localhost:3000/users',
    //         data: null
    //       }).then( res =>{
    //         this.setState({users: res.data});
    //       }).catch(err=>{});
    // }

    getData = ()=>{
        axios({
          method: 'GET',
          url: 'http://localhost:3000/users',
          data: null
        }).then( res =>{
          this.setState({users: res.data});
        }).catch(err=>{});
      }
      
    componentDidMount() {
        this.getData();
    }

   

    // render() {
    //     var {title, img, price} = this.state;
    //     return(
    //       <div>
            
    //         {
    //         this.state.users.map(a=>{
    //           var i=0;
    //           return(
    //             <div>
    //                <p>Tên : {a.name}
    //                <p> Pass :{a.pass}</p>
    //                <p> Phone :{a.phone}</p>
    //                <p>Email :{a.email}</p>
    //                <p>add :{a.address}</p>
                      
    //                   {/* <button onClick={()=>this.updateData(i)}>update</button> */}
    //               {/* <button type="button" cprimary" onClick={this.updateData}>
    //               <button type="button" className="btn btn-lassName="btn btn-primary" onClick={this.deleteData(a.id)}> */}
    //                   <button type="button"  className="btn btn-danger"onClick={this.updateData}>Block</button>
    //                   <button type="button"  className="btn btn-primary" onClick={()=>this.deleteData(a.id)}>UnBlock</button>
    //                   {/* <button onClick={()=>this.deleteData(a.id)}>delete</button> */}
    
    //                </p>             
    //             </div>
    //           )
    //           i++;
    //         })}
    //       </div>
    //     )
    //   }
    
    render() {
        return (
            <React.Fragment>
                <div className="content">
                
                                <table  className="border col-sm-12 p-2 m-2">
                                <tr className="border">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Pass</th>                                    
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                                {this.state.users.map(us => {
                        return (
                            
                                <tr>
                                    <td>{us.id}</td>
                                    <td>{us.name}</td>
                                    <td>{us.pass}</td>
                                    <td>{us.phone}</td>
                                    <td>{us.email}</td>
                                    <td>{us.address}</td>
                                    <td> {us.status===(!1)?<button type="button" 
                                      className="btn btn-success">UnBlock</button>:<button type="button"   className="btn btn-danger">Block</button>}
                                         
                                                                         
                                    </td>
                                </tr>
                                  
                                   );})}
                                 </table>
                </div>
            </React.Fragment>
        );
    }
}



export default UserManagement;