import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PrimaryContent from './components/PrimaryContent';
import CONTENT from './data/Content';
import Roles from './components/Roles';
import SecondaryContent from './components/SecondaryContent';
import Contact from './components/Contact';

export default function App() {
  const getData = (str) => CONTENT.pages.find(p => p.page === str);
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/web'>
            <div className='view'>
              <PrimaryContent data={getData('web')} />
              <Roles />
            </div>
          </Route>
          <Route path='/about'>
            <PrimaryContent data={getData('about')} />
          </Route>
          <Route path='/contact'>
            <div className='view'>
              <PrimaryContent data={getData('contact')} />
              <SecondaryContent>
                <Contact />
              </SecondaryContent>
            </div>
          </Route>
          <Route path='/'>
            <PrimaryContent data={getData('intro')} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}