import React,{Component} from 'react';
import './cards.css'

class Card extends Component {
    constructor(props){
        super(props);
        
        let angle=Math.random()*90-45;
        let x=Math.random()*40-20;
        let y=Math.random()*40-20;
        this._transform =`translate(${x}px,${y}px) rotate(${angle}deg)`

    }
    render() {
        return (
            <img style={{transform:this._transform}} className="card" src={this.props.image} alt={this.props.name}/>
        )
    }
}

export default Card;

 