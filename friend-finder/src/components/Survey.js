// Colin and Luis

import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import axiosWithAuth from "./axiosWithAuth";
import styled from "styled-components";

function Survey() {
  const [questions, setQuestions] = useState("");
  const [answers, setAnswers] = useState([]);
  const [returningAnswer, setReturningAnswer] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const info = {
      question_id: event.target.questin_id.value,
      answer_id: event.target.answer_id.value
    };
    setQuestions(info);
  }
  useEffect(() => {
    axiosWithAuth()
      .get("https://friend-finder-server.herokuapp.com/api/users/45/question")
      .then(response => {
        setQuestions(response.data.question);
        setAnswers(response.data.answers);
      })
      .catch(error => {
        console.log(error);
      });
  }, [questions]);

  useEffect(() => {
    axios
      .post(
        "https://friend-finder-server.herokuapp.com/api/users/45/question",
        returningAnswer
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [returningAnswer]);

  return (
    <StyledQuestions>
      <div>
        <Title>Question: {questions}</Title>
        {answers.map(e => {
          return <AnswerButton key={e.id}> {e.answer} </AnswerButton>;
        })}
      </div>
    </StyledQuestions>
  );
}

export default Survey;

// Styling here:

const StyledQuestions = styled.div`
  margin: 1vw;
  padding: 1vw;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const AnswerButton = styled.button`
    background: white;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;