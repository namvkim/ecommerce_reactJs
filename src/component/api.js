import {Component} from 'react';
import axios from 'axios';

class Api extends Component{
    url_users="http://localhost:3000/users";
    a="fads";
    constructor(props){
        super(props);
        this.state = {
            result : [],
        }
    }
      
    callAPI(url_api, method, body){
        axios({
            method: method,
            url: url_api,
            data: body,
        }).then( res=>{
            this.setState({result: res.data});
        }).catch((err) => {
           alert(err); 
        });   
    }

    componentDidMount(){
        this.callAPI(this.url_users,'GET','');
    }

    render(){
        return(
            <div>
                <form action>
                <input type="text" name="input" style={{border: '1px solid black'}} />
                <input type="submit" defaultValue="oke" />
                </form>
                {
                    this.state.result.map( row=>{
                        return(
                            <p>{row.name}</p>
                        )
                    })
                }
                
                
            </div>
        )
    }
}

export default Api;
