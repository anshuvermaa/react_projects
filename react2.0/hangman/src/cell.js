import React,{Component} from 'react';
import './cell.css'

class Cell extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(evt){
        // call up any he board to flip cell around this
    this.props.flipCellsAroundMe();
    }
    render(){
        let classes="cell" + (this.props.isLit ? 'Cell-lit':"");
        return (
             <td className={classes} onClick={this.handleClick}    />
           
        
        )
    }
}

export default Cell;