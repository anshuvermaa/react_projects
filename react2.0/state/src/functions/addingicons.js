import React,{Component} from 'react';

class AddingIcons extends Component {
    static defaultProps = {
        options: [
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "cloud",
            "face-frown"
        ]

    }
    constructor(props) {
        super(props);
        this.state = {
               icons:["face-frown","at"],
        };
        this.addIcon = this.addIcon.bind(this);
        this.hello=this.hello.bind(this)
    };
    hello(){
        console.log("Hello");
        alert("fuck u");
    }

   addIcon() {
    let idx=Math.floor(Math.random()*this.props.options.length);
    let newIcon=this.props.options[idx];
    
    this.setState({icons:[...this.state.icons,newIcon]})
    }
    render() {
        const icons=this.state.icons.map(i=>(
            <i className={`fa-solid fa-${i}`}></i>
                ))
        return (
            <div>{
                this.props.options[Math.floor(Math.random()*this.props.options.length)]
                }
               
            <h1>{icons}{console.log(`${icons}`)}</h1>
            <button onClick={this.addIcon}>Add new icon</button>

            </div>
        )
    }
}



export default AddingIcons;