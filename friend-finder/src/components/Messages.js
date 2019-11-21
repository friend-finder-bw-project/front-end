import React from 'react';
import * as Yup from "yup";
import axios from "axios";
import axiosWithAuth from "./axiosWithAuth";
import styled from "styled-components";
const messagesApi = "https://friend-finder-server.herokuapp.com/api/users/messages"

function Messages(props) {
  const [sentMessage, setSentMessage] = useState();
  const [recievedMessage, setRecievedMessage]
  
  useEffect(() => {
    axiosWithAuth()
      .get(messagesApi)
      .then(res => {
          console.log(res);
        // setSentMessage(res.data);
        // setRecievedMessage(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const handleSubmit = answerId => {
    const message = {
      recieverId: messagePlaceHolder
      
    };
    axiosWithAuth()
      .post(messagesApi, message)
      .then(res => {
        console.log(res);
        setMessage(message);
      })
      .catch(err => {
        console.log(err);
      });
    };
    return (
        <StyledQuestions>
          <div>
            
          </div>
        </StyledQuestions>
      );
    }
    export default Messages;