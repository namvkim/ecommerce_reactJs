import {Component} from 'react';

class Product extends Component {
    constructor(props){
    super(props);
    this.state = {   
    }
    this.onclick= this.onclick.bind(this);
}

    onclick(){
        alert(this.props.name);
}

    render() {
    return(
        <div> 
            {this.props.name}
            <button onClick={this.onclick}> okee</button>
        </div>
    )
  }
}

export default Product;