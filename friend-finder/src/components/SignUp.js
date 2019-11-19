// Luis & Colin

import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";


function SignUp(props) {
  
  const [newUser, setNewUser] = useState({
    userName: "",
    password: ""
  });

  const handleSubmit = (values, tools) => {
    console.log(values, tools);

    axios
      .post("https://friend-finder-server.herokuapp.com/api/auth/register", {})
      .then(response => {
        console.log(response.data);
        tools.resetForm();
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  return (
    <div>
      <h1>Sign Up Here!</h1>
      <Form>
        <label>
          User Name:
          <Field type="text" name="userName" placeholder="userName" />
        </label>
        <label>
          Password:
          <Field type="password" name="password" placeholder="Password" />
        </label>
        <Link to="/survey">
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
        </Link>
      </Form>
      <p>If you allready have an account click here!</p>
      <Link to="/login">
        <button>LogIn</button>
      </Link>
    </div>
  );
}

const SignUpWithFormik = withFormik({
  mapPropsToValues() {
    return {
      userName: "",
      password: ""
    };
  },

  validationSchema: Yup.object().shape({
    userName: Yup.string().required(""),
    password: Yup.string().required("")
  })
})(SignUp);

export default SignUpWithFormik;

// const handleFormChange = (e => {
//   if (e.target.type === "checkbox") {
//     setTestForm({
//       ...testForm,
//       [e.target.name]: e.target.checked
//     });
//   } else {
//     if (/^[A-Za-z]+$/.test(e.target.value) || e.target.value === "") {
//       {
//         setTestForm({
//           ...testForm,
//           [e.target.name]: e.target.value
//         });
//       }
//     }
//   }
// });

// const handleSubmit = e => {
//   // Preventing the form submit from refreshing the page
//   // preventing default form submission behaviour
//   e.preventDefault();
//   // For seeing all the event properties in the console
//   e.persist();
//   console.log(e);
//   // We can log the values of each input within the form
//   console.log(e.target.username.value);
//   console.log(e.target.password.value);
//   console.log(e.target.remember_pass.value);
// };
