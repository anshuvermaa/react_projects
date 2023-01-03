// providing route props to outside of components with withRouter


import React,{Component} from "react";
import {withRouter} from 'react-router-dom';

class Navbar extends Component{
    constructor(props){
        super(props);
       
        this.handleLogin = this.handleLogin.bind(this);
        this.handleBack=this.handleBack.bind(this);
    }
  
    handleBack(evt){
        this.props.history.goBack();
    }
    handleLogin(evt){
        alert("YOUR are logged in");
        this.props.history.push(`/food/chips`);
         
    }
    render() {
        return (
            <div>
              <button onClick={this.handleLogin} >Log In</button>
              <button onClick={this.handleBack} >Go Back</button>
            
            </div>
        )
    }
}


export default withRouter(Navbar);