import React from 'react';
import {Navigate} from 'react-router-dom'
import {useParams} from 'react-router-dom';



   const Food=()   =>     {
    let {name}=useParams();
        const url=`https://source.unsplash.com/900x500/?${name}`
         
        return (
            <div className="food">
            {/\d/.test(name) ? <Navigate to="/" /> : 
            
            <div>

            <h1>I love to eat {name}</h1>
            <img src={url} alt={name}/>

            </div>

            }
                                                
            </div>
        )
    }


export default Food;