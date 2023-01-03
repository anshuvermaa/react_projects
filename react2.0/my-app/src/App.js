import React,{Component} from 'react';
// import Pokedex from './pokedex/pokedex'
import Pokegame from './pokegame';
import Game from './game';
import './App.css';

class App extends Component {
  render() {
    

   return (
    <div className="App">
    <Game />
  <Pokegame />

  
    {/* <Pokedex /> */}

   
    </div>
  );
  }
}

export default App;
