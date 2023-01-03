// design pattern passing data UPWARDS

import React,{Component} from 'react';

class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',qty:''

        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            [evt.target.name]:"",
        })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    render(){
        return (
           <form onSubmit={this.handleSubmit}>
             <label htmlFor='name'>Name:{}</label>
             <input id="name" 
             name="name" 
             value={this.state.name} 
             onChange={this.handleChange}
        />
             <label htmlFor='qty'>quantity:</label>
             <input id="qty" 
             type="number" 
             name="qty" 
             value={this.state.qty} 
             onChange={this.handleChange}
        />
        <button onClick={this.handleChange}>Add Item</button>

           </form>
        )
    }
}


export default ShoppingListForm ;