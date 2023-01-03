import React,{Component} from 'react';
import './box.css';
import {choice} from './helper';
class Box extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            color: choice(this.props.color),

        };
        this.handleClick=this.handleClick.bind(this);
    }

    setColor() {
        let newColor;
        do{
            newColor=choice(this.props.color);
        }while(newColor===this.state.color);
     this.setState(st=>{ 
        return {
            color:newColor
            
        }
     })

    }
    handleClick(){
         this.setColor()
    }
    render() {
        return (
            <div className="box" style={{backgroundColor:this.state.color}} onClick={this.handleClick}></div>
        )
    }
}


export default Box;