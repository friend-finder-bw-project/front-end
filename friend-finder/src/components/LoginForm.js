// Luis & Colin
import React, { useRef } from "react";
import axios from "axios";
import styled from "styled-components";

function LoginForm(props) {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    };
    axios
      .post("https://friend-finder-server.herokuapp.com/api/auth/login", data)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        props.history.push('/profile');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <StyledLogin>
      <h1>Welcome Back to Friend Finder</h1>
      <h2>Please Login below!</h2>
      <form onSubmit={handleSubmit}>
        <p>User name:</p>
        <input name="username" type="text" ref={usernameRef} />
        <p>Password:</p>
        <input name="password" type="password" ref={passwordRef} />
        <button type="submit">SignUp</button>
      </form>
    </StyledLogin>
  );
}

export default LoginForm;

// Styling here:

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
  background: papayawhip;

  & form {
    display: flex;
    flex-direction: column;

    & input {
      border-color: papayawhip;
    }

    & button {
      background: white;
      color: palevioletred;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    }
  }
`;
