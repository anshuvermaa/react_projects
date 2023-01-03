import React,{Component} from "react";
import {Link} from 'react-router-dom';

class FoodSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            query:''

        }
        this.handleClick=this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(evt){
        this.setState({query:evt.target.value});
    }
    handleClick(evt){
        alert("YOUR DATA IS SAVED");
        this.props.history.push(`/food/${this.state.query}`);
        console.log(this.props.history)
         
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Search for a food</h1>
                <input type="text" placeholder="food" value={this.state.query} onChange={this.handleChange}/>
              <Link to={`/food/${this.state.query}`}>Go!</Link>
              <button onClick={this.handleClick} >Save UR Data To DB!</button>
            
            </div>
        )
    }
}


export default FoodSearch;