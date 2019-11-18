import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
    <Route exact path = '/' component={SignUp}/>
    <Route exact path = '/login' component={LoginForm}/>
    </div>
  );
}

export default App;
