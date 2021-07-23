import logo from './logo.svg';
import './App.css';
import {Router} from "@reach/router"
import Main from "./views/Main"
import Add from "./views/Add"
import Pirate from "./views/Pirate"

function App() {
  return (
    <div className="App">
      <Router>
          <Main path="/"/>
          <Add path="/pirate/add"/>
          <Pirate path="/pirate/:_id"/>
      </Router>
      
    </div>
  );
}

export default App;
