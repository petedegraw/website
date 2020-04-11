import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PrimaryContent from './components/PrimaryContent';
import CONTENT from './data/Content';

export default function App() {
  const getData = (str) => CONTENT.pages.find(p => p.page === str)
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/web'>
            <PrimaryContent data={getData('web')} />
          </Route>
          <Route path='/about'>
            <PrimaryContent data={getData('about')} />
          </Route>
          <Route path='/'>
            <PrimaryContent data={getData('intro')} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}