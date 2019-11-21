import React, {useState, useEffect} from 'react';
import * as Yup from "yup";
import axios from "axios";
import axiosWithAuth from "./axiosWithAuth";
import styled from "styled-components";
const messagesApi = "https://friend-finder-server.herokuapp.com/api/users/messages"

function Messages(props) {
  const [sentMessage, setSentMessage] = useState();
  const [recievedMessage, setRecievedMessage] = useState();
  
  useEffect(() => {
    axiosWithAuth()
      .get(messagesApi)
      .then(res => {
          console.log(res.data);
         setSentMessage(res.data);
         setRecievedMessage(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


   // sender_id: 1, sender_username: "James", message:

   
  //  setRecievedMessage.map(() => {
  //     return(
  //       <div>
  //         {recievedMessage.message}
  //       </div>
  //     )
  //  })
};


export default Messages;