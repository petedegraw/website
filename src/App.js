import React from 'react';
import './App.css';
import Intro from './components/Intro';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/web'>
            <p>web</p>
          </Route>
          <Route path='/about'>
            <p>pete</p>
          </Route>
          <Route path='/'>
            <Intro />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}