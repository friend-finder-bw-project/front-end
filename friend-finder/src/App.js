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
import Messages from "./components/Messages";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: ""
  });
  return (
    <div className="Card">
      <Nav />
      <StyledDiv>
        
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/friendslist" component={FriendsList} />
        <Route exact path="/messages" component={Messages} />
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
