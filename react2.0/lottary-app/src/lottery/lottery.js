import React,{Component} from 'react';
import Balls from '../balls/balls'
import './lottery.css';
class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls:6,
        maxNum:40,
    }
 constructor(props){
    super(props);
    this.state = {
        num:Array.from({length:this.props.maxBalls})

    };
    this.handleClick = this.handleClick.bind(this);
 }
generate(){
    this.setState(curState=>({
        // this will create a new array and change the state of previous array
        num:curState.num.map(
            n=>Math.floor(Math.random()*this.props.maxNum)+1
        )
    }));
  
 }
 handleClick(){
 this.generate()

 }
 render(){
    return (
        <div className="lottery">
       <h1>{this.props.title}</h1>
       <div>
       {this.state.num.map(n => <Balls   num={n}/>)}
        
        </div>
        <button onClick={this.handleClick}>Generate</button>
        </div>
    )
 }

 };
 




export default Lottery;