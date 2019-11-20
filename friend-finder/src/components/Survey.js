// Colin and Luis

import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import axiosWithAuth from "./axiosWithAuth";

function Survey() {
  const [questions, setQuestions] = useState("");
  const [answers, setAnswers] = useState([]);

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

  return (
    <div>
      <h1>Question: {questions}</h1>
      {answers.map(e => {
        return <button key={e.id}> {e.answer} </button>;
      })}
    </div>
  );
}

export default Survey;
