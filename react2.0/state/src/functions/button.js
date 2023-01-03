import React,{Component} from 'react';

class BrokenClick extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
        // importent
        // here u cant do this.handleclick as this.maketimer() in rand.js
        //when we use this.handleclick only javascript doent know for which 
        // component this is used for 
        // thats why we use bind telling JS use this for this method
        this.handleclick=this.handleclick.bind(this)
     
    }
   
    

    

    handleclick() {
     this.setState({clicked: true});
     setTimeout(()=>{
        this.setState({clicked:false})
    },5000); 

    }
    render() {
        return (<div>
        <h1>{this.state.clicked ?'u have clicked':'not clicked'}</h1>
    <button onClick={this.handleclick}> hey click me!</button>



        </div>);
    }
}


export default BrokenClick;