import React ,{Component} from 'react';
import Todo from './todo';
import Form from './form';
import './todolist.css';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[
               
            ]

        }
        this.create=this.create.bind(this)
        this.remove=this.remove.bind(this)
        this.update=this.update.bind(this)
        this.toggleCompletion=this.toggleCompletion.bind(this)
    }
    remove(id){
        this.setState({
            todos:this.state.todos.filter(
                t=> t.id!==id
            )
        })
    }
    create(newTask){
        this.setState({
            todos:[...this.state.todos,newTask]
        })
        
    }



   update(id,updatedTask){
        const updatedTodos=this.state.todos.map(todo =>{
            if(todo.id===id){
                return { ...todo,task:updatedTask}
            }
            return todo
        })
        this.setState({todos:updatedTodos})

    }
    toggleCompletion(id){
        const updatedTodos=this.state.todos.map(todo =>{
            if(todo.id===id){
                return { ...todo,completed:!todo.completed}
            }
            return todo
        })
        this.setState({todos:updatedTodos})


    }
    render(){
        const todos=this.state.todos.map(todo=>{
          return  <Todo
           key={todo.id}
          id={todo.id} 
          task={todo.task} 
          removeTask={this.remove} 
          updateTask={this.update}
          completed={todo.completed}
          toggleTask={this.toggleCompletion}
          />
        })
        return (
            <div className="todolist">
            <h1>
            Todo LIST!<span> A Simple React Todo list App.</span>
            </h1>
            <ul>{todos}</ul>
             <Form createBox={this.create}/>
            </div>
        )
    }
}

export default TodoList;