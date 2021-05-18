import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import util from '../../util';



 function increaseQuantity(items,index,id){
  
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  let productAlreadyInCart = false;
  cartItems.forEach((item) => {
    if (item.id===id) {
      cartItems[index].count += 1;
      productAlreadyInCart = true;
    }
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  

};

function decreaseQuantity(items,index,id){
  
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  let productAlreadyInCart = false;
  cartItems.forEach((item) => {
    if (item.id===id) {
      cartItems[index].count -= 1;
     
      productAlreadyInCart = true;
    }
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
 
};

function removeFromCart(items, product)  {
  const cartItems = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
 
};




class Cart extends Component {
  render() {
    const  cartItems  = JSON.parse(localStorage.getItem("cartItems"));
   
  
    return (
      <div className="alert alert-light" >
        
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>
            You have {cartItems.length} items in the basket. <i className="fa fa-2x fa-shopping-cart"></i>
            <hr />
          </div>
        )}
        {cartItems.length > 0 && ( 
            
            <div className="row">
            <div className="col-md-12">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    cartItems.map((item,index)=>{
                        return(
                            <tr key={index}>    
                            <td><input type="checkbox"  style={{padding:'5px 10px'}}></input></td>
                            <td>{item.name}</td>
                            <td><img src={item.pics[0]} style={{width:'100px',height:'80px'}}/></td>
                            <td>{item.price} $</td>
                            <td>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={(e)=>{decreaseQuantity(item,index,item.id)}}>-</span>
                                    <span className="btn btn-info">{item.count}</span>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={(e)=>{increaseQuantity(item,index,item.id)}}>+</span>
                            </td>
                            <td>{ TotalPrice(item.price,item.count)} $</td>
                            <td><i className="badge badge-danger" onClick={(e) =>{removeFromCart(cartItems, item)}}> Delete</i></td>
                        </tr>
                        )
                    })
                        
                }
                <tr>
                    <td colSpan="4"  style={{fontWeight:'bold'}} >Total Carts</td>
                    <td style={{fontWeight:'bold', color: 'red'}}>{util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )} </td>
                    <td className="btn btn-warning" style={{padding:'5px 15px'}} >Book</td>
                </tr>
               
                    
               
                </tbody>
              
            </table>
            </div>
        </div>


       
           
        )}
      </div>
    );
  }
}

function TotalPrice(price,tonggia){
  return Number(price * tonggia).toLocaleString('en-US');
}

export default Cart;