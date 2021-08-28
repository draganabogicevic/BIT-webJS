import React from "react";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Home from "./Home.jsx"
import About from "./About.jsx"
import NotFound from "./NotFound.jsx"


import './App.css';
  


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
    );
  
  
};


export default App;



