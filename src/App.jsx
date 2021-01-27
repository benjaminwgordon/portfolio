import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import './App.scss';

const App = () => {
  return (
    <Router basename="/portfolioV2">
      <div className="background">
        <Navbar />
          <div className="content">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/projects">
                <Home />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  )
}

export default App

