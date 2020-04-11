import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Intro from './components/Intro';
import Web from './components/Web';
import About from './components/About';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/web'>
            <Web />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Intro />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}