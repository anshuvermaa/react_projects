import React,{Component} from 'react';
import Form from './form';
import Box from './box'
import './boxcontainer.css'
class BoxContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: [
                { height:10,width:10,color:'green'},
                { height:10,width:10,color:'orange'},
            ],
            
        }
        this.create=this.create.bind(this)
        
    }

    remove(id){
        this.setState({
            //making new array who not containing the id
            boxes: this.state.boxes.filter(box=> box.id !== id)
        })

    }
    
    create(newbox){
        this.setState({
            boxes:[...this.state.boxes,newbox]
        })
    }
     

  
  
    render(){

        const boxes=this.state.boxes.map(box=>(
            <Box
                key={box.id}
                id={box.id}
                width={box.width}
                height={box.height}
                color={box.color}
                removeBox={()=> this.remove(box.id)}
            />
        ))
        return (
            <div>
             <h1>Color box maker thingy</h1>
         <Form createBox={this.create}/>
       <div className="box-container">

       {boxes}

       </div>
            </div>
        )
    }
}
export default BoxContainer;