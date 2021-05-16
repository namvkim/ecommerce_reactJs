import React, { Component } from 'react';

class History extends Component {
    render() {
        return (
          
         
               <div className="row"  style={{marginTop: '4rem', color: 'black'}}>
                    <div className="col-sm-3">
                        <div className="card" style={{width: '16rem'}}>
                            <img className="card-img-top" src="images/customer.png" style={{width: '5rem', height: '5rem', margin: 'auto auto'}} alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title" style={{color: 'black'}}>Chờ xác nhận</h5>
                           
                            </div>
                        </div>
                        </div>
                   

                    <div className="col-sm-3">
                    <div className="card" style={{width: '16rem'}}>
                            <img className ="card-img-top" src="images/box.png"  style={{width: '5rem', height: '5rem', margin: 'auto auto'}}></img>
                            <div className="card-body">
                            <h5 className="card-title" style={{color: 'black'}}>Chờ lấy hàng</h5>
                           
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-3">
                    <div className="card" style={{width: '16rem'}}>
                            <img className ="card-img-top" src="images/delivery-truck.png"  style={{width: '5rem', height: '5rem', margin: 'auto auto'}}></img>
                            <div className="card-body">
                            <h5 className="card-title" style={{color: 'black'}}>Đang giao</h5>
                           
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className="card" style={{width: '16rem'}}>
                            <img className ="card-img-top" src="images/deliveryman.png"  style={{width: '5rem', height: '5rem', margin: 'auto auto'}}></img>
                            <div className="card-body">
                            <h5 className="card-title" style={{color: 'black'}}>Đã giao hàng</h5>
                           
                            </div>

                        </div>
                    </div>
             </div>
         
       
        
        );
    }
}

export default History;