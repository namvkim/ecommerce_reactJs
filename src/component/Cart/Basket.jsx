import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../../util";
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from "../../actions/cartActions";

class Basket extends Component {
  render() {
    const { cartItems } = this.props;
   
  
    return (
      <div className="alert alert-info" >
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
                            <td>{item.title}</td>
                            <td><img src={`images/${item.sku}_2.jpg`} style={{width:'100px',height:'80px'}}/></td>
                            <td>{item.price} $</td>
                            <td>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={(e)=>this.props.decreaseQuantity(item,index,item.id)}>-</span>
                                    <span className="btn btn-info">{item.count}</span>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={(e)=>this.props.increaseQuantity(item,index,item.id)}>+</span>
                            </td>
                            <td>{ TotalPrice(item.price,item.count)} $</td>
                            <td><i className="badge badge-danger" onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }>X</i></td>
                        </tr>
                        )
                    })
                        
                }
                <tr>
                    <td colSpan="4"  style={{fontWeight:'bold'}} >Total Carts</td>
                    <td style={{fontWeight:'bold', color: 'red'}}>{util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )} </td>
                    <td className="btn btn-warning" style={{padding:'5px 15px'}}  onClick={() => alert("Todo: Implement checkout page.")} > Book</td>
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

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart, increaseQuantity, decreaseQuantity })(Basket);