
import './App.css';
import Geek from './components/geek';
import ZenQuote from './components/zenquote';
import GithubUserInfo from './components/githubuserinfo'

function App() {
  return (
    <div className="App">
     <Geek />
     <ZenQuote />
     <GithubUserInfo username="anshuvermaa"/>
    </div>
  );
}

export default App;
