import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  {connect} from  'react-redux'
export class Header extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div className="row">
              <div className="col-md-12">
                  <nav className="navbar  navbar-dark bg-info" >
                        <ul className="nav">
                            <li className="nav-item" ><Link to="/" className="nav-link active " style={{color:'white'}}>Products</Link></li>
                            <li className="nav-item"><Link to="/carts" className="nav-link" style={{color:'white'}}>Carts : {cartItems.length}</Link></li>
                            <li className="nav-item"><Link to="/booking" className="nav-link" style={{color:'white'}}>Booking  </Link></li>
                            <li className="nav-item"><Link to="/history" className="nav-link" style={{color:'white'}}>History  </Link></li>
                        </ul>
                  </nav>
              </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps,null)(Header)