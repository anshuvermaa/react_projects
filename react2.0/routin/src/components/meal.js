import React,{Component} from 'react';
 

   class Meal extends Component {   




        render() {
          const  foodname=this.props.match.params.foodname;
         const   drinkname=this.props.match.params.drinkname;
            
            const foodUrl=`https://source.unsplash.com/900x500/?${foodname}`;
        const drinkUrl=`https://source.unsplash.com/900x500/?${drinkname}`;
         
        return (
            <div className="food">
            <h1>I love Meal {foodname} + {drinkname}</h1>
            <img src={foodUrl} alt={foodname}/>
            <img src={drinkUrl} alt={drinkname}/>
           
                                                
            </div>
        )}
    }

   
export default Meal;