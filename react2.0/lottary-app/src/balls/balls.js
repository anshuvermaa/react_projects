import React,{Component} from 'react';
import './balls.css';
class Balls extends Component {
 constructor(props){
    super(props);
    this.state = {

    }
 }
 render() {
    return (
        <div className="balls">
    
        {this.props.num}

        </div>
    )
 }

}


export default Balls;