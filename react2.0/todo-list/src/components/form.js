import React ,{Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import './form.css'

class Form extends Component{
    constructor(props){
        super(props);
        this.state = 
           {task:''}

       
        
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value

        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        const newTask={...this.state,id: uuidv4(),completed:false}
       this.props.createBox(newTask);
       this.setState({
           task: '',
       })
    }
    render(){
        return (
          <form className="todo-form" onSubmit={this.handleSubmit}>
           <label htmlFor='task'></label>
           <input type='text' placeholder='task' name='task' onChange={this.handleChange} value={this.state.task} id='task' />
           <button>Add task</button>
          </form>
        )
    }
}
 
export default Form;