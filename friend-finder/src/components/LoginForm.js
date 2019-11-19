// Colin and Luis

import React from 'react';
import ReactDom from 'react-dom';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import Axios from 'axios';

function LoginForm(props) {

    Axios.post('https://friend-finder-server.herokuapp.com/api/auth/register')
        .then()
        .catch()

    return (
        <div>
            <h1>Login Screen</h1>
            <Form>
                <label>
                    User Name:
                <Field
                        type="text"
                        name="userName"
                        placeholder="userName"
                    />
                </label>
                <label>
                    Password:
                <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </label>
                <input type="submit" />
            </Form>
        </div>
    );
}

const LoginFormWithFormik = withFormik({
    mapPropsToValues() {
        return {
            userName: "",
            password: "",
        };
    },
    validationSchema: Yup.object().shape({
        userName: Yup.string().required(""),
        password: Yup.string().required(""),
    })
})(LoginForm);

export default LoginFormWithFormik;