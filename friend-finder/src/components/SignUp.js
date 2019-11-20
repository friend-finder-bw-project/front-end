// Luis & Colin
import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';

function SignUp(props) {
  const [newUser, setNewUser] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    };
    setNewUser(data);
  }
  useEffect(() => {
    axios
      .post(
        "https://friend-finder-server.herokuapp.com/api/auth/register",
        newUser
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [newUser]);

  return (
    <StyledSignUp>
      <form onSubmit={handleSubmit}>
        <p>User name:</p>
        <input name="username" type="text" />
        <p>Password:</p>
        <input name="password" type="password" />
        {/* <Link to="/survey"> */}
          <button>SignUp</button>
        {/* </Link> */}
      </form>
    </StyledSignUp>
  );
}

export default SignUp;


// Styling here:

const StyledSignUp = styled.div`
  display: flex;
  justify-content: center;
  
  & form {
    display: flex;
    flex-direction: column;

    & button {
      
    }
  }
`;