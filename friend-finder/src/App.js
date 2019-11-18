// Colin and Luis

import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import Survey from './components/Survey';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
    <Nav />
    <Route exact path = '/' component={SignUp}/>
    <Route exact path = '/login' component={LoginForm}/>
    <Route exact path = '/survey' component={Survey}/>
    <Route exact path = '/profile' component={Profile}/>
    </div>
  );
}

export default App;
