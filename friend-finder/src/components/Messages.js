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
          console.log(res);
         setSentMessage(res.data);
         setRecievedMessage(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
//  const handleSubmit = messageId => {
//          const message = {
//        recieverId: 
      
//     };
    // axiosWithAuth()
    //   .post(messagesApi, sentMessage)
    //   .then(res => {
    //     console.log(res);
    //     setSentMessage(sentMessage);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // };

    return (
       <h1></h1>
      );
}
    export default Messages;