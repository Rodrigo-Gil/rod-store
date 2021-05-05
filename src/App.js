import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const childrenPage = () => (
  <div>
    <h1> Children Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/children' component={childrenPage} />
      </Switch>
    </div>
  );
}

export default App;
