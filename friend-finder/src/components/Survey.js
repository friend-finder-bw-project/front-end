// Colin and Luis

import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import axiosWithAuth from "./axiosWithAuth";
import styled from "styled-components";

function Survey(props) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [returningAnswer, setReturningAnswer] = useState(null);
  useEffect(() => {
    axiosWithAuth()
      .get("https://friend-finder-server.herokuapp.com/api/users/question")
      .then(res => {
        setQuestion(res.data);
        setAnswers(res.data.answers);
      })
      .catch(err => {
        console.log(err);
      });
  }, [returningAnswer]);
  const handleSubmit = answerId => {
    const answer = {
      questionId: question.question_id,
      answerId: answerId
    };
    axiosWithAuth()
      .post(
        "https://friend-finder-server.herokuapp.com/api/users/question",
        answer
      )
      .then(res => {
        console.log(res);
        setReturningAnswer(answer);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <StyledQuestions>
      <div>
        <Title>Questions: {question.question}</Title>
        {answers.map(answer => {
          return (
            <Buttons>
            <AnswerButton
              key={answer.id}
              value={answer.id}
              onClick={() => handleSubmit(answer.id)}
            >
              {answer.answer}
            </AnswerButton>
            </Buttons>
          );
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
  background: lightblue;
`;

const Buttons =styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;

const Title = styled.h1`
  
font-size: 1.5em;
  text-align: center;
  color: orange;
   
`;


const AnswerButton = styled.button`
    display: flex;
    background: white;
    color: black;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
`;