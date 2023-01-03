import React,{Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
           height:null,width:null,color:' ',

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this)
    }


    handleChange(evt){
      
       
            this.setState({
               [evt.target.name]:evt.target.value

            })
       
    }
    handleSubmit(evt){
        evt.preventDefault();
         const newBox={...this.state,id: uuidv4()}
        this.props.createBox(newBox);
        this.setState({
            height: '',width: '',color:''
        })
    } 

    render(){
       
        return (
            <div>
            
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="height"></label>
            <input className="height" type="Number" name="height" id="height" placeholder="Height" value={this.state.height} onChange={this.handleChange}/>
            <label htmlFor="width"></label>
            <input className="width" type="Number" name="width" id="width" placeholder="width" value={this.state.width} onChange={this.handleChange}/>
            <label htmlFor="color"></label>
            <input className="color" type="text" name="color" id="color" placeholder="color" value={this.state.color} onChange={this.handleChange}/>

             <button onChange={this.handleChange}>Add new box</button>
             </form>


          
            </div>
        )
    }
}
export default Form;