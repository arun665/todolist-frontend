import logo from './logo.svg';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './components/Home';
import Add from './components/Add';
import Show from './components/Show';
import Edit from './components/Edit';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/add" exact>
            <Add />
          </Route>
          <Route path="/show/:id" exact>
            <Show />
          </Route>
          <Route path="/edit/:id/:task/:time" exact>
            <Edit />
          </Route>
          
          
          
        </Switch>

    </Router>
    </div>
  );
}

export default App;
