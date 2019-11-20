// Luis & Colin
import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import axios from "axios";

function LoginForm(props) {

  const [returningUser, setReturningUser] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    };
    setReturningUser(data);
  }
  useEffect(() => {
    axios
      .post(
        "https://friend-finder-server.herokuapp.com/api/auth/login",
        returningUser
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [returningUser]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        User name:
        <input name="username" type="text" />
        Password:
        <input name="password" type="password" />
        <button>SignUp</button>
      </form>
    </div>
  );
}

export default LoginForm