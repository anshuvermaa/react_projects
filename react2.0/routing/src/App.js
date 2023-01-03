import './App.css';
import React,{Component} from 'react';
import Food from './components/food';
import {Route,Routes} from 'react-router-dom';
import Meal from './components/meal';
import FoodSearch from './components/form';

class App extends Component{
  render() {



    return (
      <div className="App">
    
   <Routes > 
      
   <Route exact path="/" element={<FoodSearch/>} />
   <Route exact path="/food/:name" element={<Food name="burger"  />}  />
   <Route exact path="/food/:foodname/drink/:drinkname" element={<Meal />}/>
   <Route exact path="/*" ex element={<h1>page not found</h1>}/>
    </Routes>
    </div>
  );
}

}
export default App;
