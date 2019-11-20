// Colin and Luis

import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";

function Survey() {
  const [questions, setQuestions] = useState([]);
  const [survey, setSurvey] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const info = {
      question_id: event.target.questin_id.value,
      answer_id: event.target.answer_id.value
    };
    setSurvey(info);
  }
  useEffect(() => {
    axios
      .get("https://friend-finder-server.herokuapp.com/api/users/45/questions")
      .then(response => {
        const questions = response.data;
        questions.map(e => {
          console.log(e.question);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, [survey]);

  return (
    <div>
      <h1>
         
      </h1>
    </div>
  );
}

export default Survey;
