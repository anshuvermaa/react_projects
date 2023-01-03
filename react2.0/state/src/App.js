
import './App.css';
import Rand from './functions/rand';
import BrokenClick from './functions/button';
import AddingIcons from './functions/addingicons';
import ShoppingList from './functions/shoppinglist';

function App() {
  return (
    <div className="App">
      <Rand />
      <BrokenClick />
      <AddingIcons/>
      <ShoppingList/>

    </div>
  );
}

export default App;
