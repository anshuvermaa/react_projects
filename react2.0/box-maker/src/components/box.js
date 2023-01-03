import React,{Component} from 'react';
import './box.css'
class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
           

        }
    }
    render(){
       
        return (
            <div>
            


            <div className="box" style={{
                height:`${this.props.height}em`,
                width:`${this.props.width}em`,
                backgroundColor:this.props.color,
                // here in case of arrow function we dont have to do binding
            }}><i onClick={this.props.removeBox} className="comp" class="fa-solid fa-rectangle-xmark"></i>
            </div>
            </div>
        )
    }
}
export default Box;