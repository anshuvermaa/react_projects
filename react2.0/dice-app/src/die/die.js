import React,{Component} from 'react';
import './die.css'

class Die extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
     return (
       
        <i className={` die fa-solid fa-dice-${this.props.face} ${this.props.rolling ? 'shaking':' '}`}></i> 
    
     )
    }
}
export default Die;