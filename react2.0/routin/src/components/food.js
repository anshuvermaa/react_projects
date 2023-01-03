import React,{Component} from 'react';
import './food.css';
import {Redirect} from 'react-router-dom'


 class Food extends Component    {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
       const name=this.props.match.params.name;
       console.log(name);
        const url=`https://source.unsplash.com/900x500/?${name}`
         
        return (
            <div className="food">
            {/\d/.test(name) ? <Redirect to='/'/> :
            <div>
             <h1>I love to eat {name}</h1>
            <img src={url} alt={name}/>
          </div>
           

            }
           
           
                                                
            </div>
        )
    }
 }

export default Food;