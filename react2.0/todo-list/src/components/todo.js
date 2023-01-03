import React ,{Component} from 'react';
import './todo.css'

class Todo extends Component{
    constructor(props){
        super(props);
      this.state = {
        isEditing: false,
        task:this.props.task

      }
      this.handleRemove=this.handleRemove.bind(this)
      this.toggleForm=this.toggleForm.bind(this)
      this.handleChange=this.handleChange.bind(this)
      this.handleUpdate=this.handleUpdate.bind(this)
      this.handleToggle=this.handleToggle.bind(this)
      
    }
    handleRemove(){
     this.props.removeTask(this.props.id);
    }
    toggleForm(){
        this.setState({
            isEditing:!this.state.isEditing
        })
    }
    handleUpdate(evt){
        evt.preventDefault();
        // take new task data and pass it to parent
        this.props.updateTask(this.props.id,this.state.task)
        this.setState({
            isEditing: false,
        })
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value

        })
    }
    // for update we need two things first id and second one is updated task
  
handleToggle(evt){
    this.props.toggleTask(this.props.id)
}

    render(){
        let result;
        if(this.state.isEditing){
            result=(
                <div className="todo">
                     <form onSubmit={this.handleUpdate} className="todo-edit">
                        <input type="text"
                            value={this.state.task}
                            name="task"
                            onChange={this.handleChange}
                        />
                        <button className="btf">Save</button>
                     </form>
    
                </div>
            )


        }else{
            result=(
               
                  <div className="todo">
           
            <li  className={this.props.completed ? 'todo-task completed':'todo-task'} onClick={this.handleToggle}>{this.props.task}</li>
             


             <div className="todo-buttons">

            <button onClick={this.toggleForm}><i class="fa-solid fa-file-pen"></i></button>
            <button onClick={this.handleRemove}><i class="fa-solid fa-trash"></i></button>

             </div>
            </div>


               
            )
        }
        
        
        
       
        return result
    }
}

export default Todo;