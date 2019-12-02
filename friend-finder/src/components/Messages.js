import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import axiosWithAuth from "./axiosWithAuth";
import styled from "styled-components";
const messagesApi =
  "https://friend-finder-server.herokuapp.com/api/users/messages";

function Messages(props) {
  const [sentMessage, setSentMessage] = useState();
  const [recievedMessage, setRecievedMessage] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(messagesApi)
      .then(res => {
        setRecievedMessage(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [recievedMessage]);

  // sender_id: 1, sender_username: "James", message:

  return (
    <Card>
      
      <h1>Your Messages:</h1>
      {recievedMessage.map((e) => {
        return (
          <span>
            <p>Message from: {e.sender_username}</p>
            <p>{e.message}</p>
          </span>
        )
      })}
    </Card>
  );
}

export default Messages;


// Styling here:

const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
  background: lightblue;
  color: orange;

  & span {
    color: black;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    padding: 10px;
  }
`;
