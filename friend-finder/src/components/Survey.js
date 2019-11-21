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
        <Title>Question: {question.question}</Title>
        {answers.map(answer => {
          return (
            <AnswerButton
              key={answer.id}
              value={answer.id}
              onClick={() => handleSubmit(answer.id)}
            >
              {answer.answer}
            </AnswerButton>
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
