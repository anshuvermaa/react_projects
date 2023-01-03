import React from 'react';
import {useParams} from 'react-router-dom';


   const Meal=(ele)   =>     {
       let {drinkname,foodname}=useParams();
       console.log(useParams());
        const foodUrl=`https://source.unsplash.com/900x500/?${foodname}`;
        const drinkUrl=`https://source.unsplash.com/900x500/?${drinkname}`;
         
        return (
            <div className="food">
            <h1>I love Meal {foodname} + {drinkname}</h1>
            <img src={foodUrl} alt={foodname}/>
            <img src={drinkUrl} alt={drinkname}/>
           
                                                
            </div>
        )
    }


export default Meal;