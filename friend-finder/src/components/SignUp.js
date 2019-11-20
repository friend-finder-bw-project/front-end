// Luis & Colin
import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit}>
        User name:
        <input name="username" type="text" />
        Password:
        <input name="password" type="password" />
        {/* <Link to="/survey"> */}
          <button>SignUp</button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default SignUp;
