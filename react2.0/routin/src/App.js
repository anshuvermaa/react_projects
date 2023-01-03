import './App.css';
import React,{Component} from 'react';
import Food from './components/food';
import {Route,Switch} from 'react-router-dom';
import FoodSearch from './components/form';
import Meal from './components/meal';
import Navbar from './components/navbar';


class App extends Component {
 constructor(props) {
  super(props);
  this.state = {

  }
 }
 render() {

    return (
      <div className="App">
    
   
     
      <Navbar />
        
   <Switch>


  
      
   <Route exact path="/" component={FoodSearch} />
   <Route exact path="/food/:name" component={Food}  />
   <Route exact path="/food/:foodname/drink/:drinkname" component={Meal}/>
   <Route exact path="/*"  render={ele=><h1 >page not found </h1>}/>
   

 </Switch>
  
    </div>
  );
}
}

export default App;
