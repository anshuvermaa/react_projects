import React,{Component} from 'react';

class Rand extends Component{
    constructor(props){
        super(props);
        this.state = {
            randnum:0
        }
        this.maketimer();
    }

  maketimer(){
        setInterval(()=>{
            let num = this.state.randnum;
            num+=1;
            this.setState({randnum:num})
        },
        1000);
    }

    render(){
        return (
            <div>
    <h1 className>this is changing number{this.state.randnum}</h1>
    </div>

        )
    }
}


export default Rand;