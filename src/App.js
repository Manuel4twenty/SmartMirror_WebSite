import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


import Navbar from './common/Navbar.js';
import Home from './Components/Home.js';
import Docs from './Components/Docs.js';
import Contact from './Components/Contact.js';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Docs" component={Docs} />
          <Route exact path="/Contact" component={Contact} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
