import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import Survey from './components/Survey'
import './App.css';

function App() {
  return (
    <div className="App">
    <Route exact path = '/' component={SignUp}/>
    <Route exact path = '/login' component={LoginForm}/>
    <Route exact path = '/survey' component={Survey}/>
    </div>
  );
}

export default App;
