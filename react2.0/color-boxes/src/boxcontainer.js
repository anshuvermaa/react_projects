import React , { Component} from 'react';
import Box from './box'
import './boxcontainer.css'
 

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes:19,
        allColors:['purple','white','black','red','blue']

    }
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const boxes=Array.from({length:this.props.numBoxes}).map(
            ()=><Box color={this.props.allColors}/>
        )
        return (
   <div className="boxcontainer">
    {boxes}
   </div>
        )
    }
}

export default BoxContainer;