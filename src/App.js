import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './component/Home';
import About from "./component/About";
import Connect from "./component/Connect";
import Story from './component/Story';
import Project from './component/Project';
function App() {
  
  return (
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About} exact/>
      <Route path="/connect" component={Connect} exact/>
      <Route path="/story" component={Story} exact/>
      <Route path="/project" component={Project} exact/>
    </Switch>
  );
}

export default App;
