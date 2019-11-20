// Colin and Luis

import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import Survey from "./components/Survey";
import Profile from "./components/Profile";
import FriendsList from "./components/FriendsList";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: ""
  });
  return (
    <div className="App">
      <Nav />
      <StyledDiv>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/friendslist" component={FriendsList} />
      </StyledDiv>
    </div>
  );
}

export default App;

// Styling here:

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
