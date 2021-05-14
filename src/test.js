import {Component} from 'react';
import Product from './product';

class Test extends Component {
    constructor(props){
    super(props);
    this.state = {
      status:true,
      }
    }
    
    change=()=>{
      this.setState({
        status:!this.state.status
      });
    }

    render() {
    let products = [
        {
            id:1,
            name:"san pham 1",
            status:true
        },
        {
            id:2,
            name:"san pham 2",
            status:false
        },
        {
            id:3,
            name:"san pham 3",
            status:true
        }
    ]   

    let element = products.map( (product,index)=>{
      if(product.status)
      return <Product key={index} name={product.name}/>
  })

    return(
        <div> 
            <button className="bg-info" onClick={this.change}>oke</button>
            { this.state.status ? "on" : "off"}
            {element}
        </div>
    )
  }
}

export default Test;