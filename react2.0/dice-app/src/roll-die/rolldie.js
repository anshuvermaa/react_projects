import React,{Component} from 'react';
import Die from '../die/die';
import './rolldie.css';


class RollDie extends Component{
    static defaultProps = {
        sides:['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props){
        super(props);
        this.state = {
            die1:'one',die2:'two',rolling:false,

        }
        this.roll=this.roll.bind(this);


    }

    roll(){
        //  pick two new rolls
    const newDie1=this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
    const newDie2=this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
    
    //and set state for two new rolls
    this.setState({die1:newDie1,die2:newDie2,rolling:true});
 // wait one sec and then set rolling to false
setTimeout(() => {
    this.setState({rolling:false});
},500)
    }
    render(){
        return (
            <div  className="rolldie">
            <div className="rolldie-container">

             <Die  face={this.state.die1} rolling={this.state.rolling}/>
             <Die  face={this.state.die2} rolling={this.state.rolling}/>


            </div>
             <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling ?'Rolling...':'Roll Dice!'}</button>

            </div>
        )
    }
}

export default RollDie;