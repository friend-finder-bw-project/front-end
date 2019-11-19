// Colin and Luis

import React from 'react';
import ReactDom from 'react-dom';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

function LoginForm(props) {
    // console.log(props);
    // const {formV}
    // const handleChange = e => {
    //     setFormValues({ ...formValues, [e.target.name]: e.target.value });
    //   };
    //   const handleSubmit = e => {
    //       e.preventDefault();
    //       axios.post("http://localhost:3300/api/auth/login",formValues)
    //       .then(res => {
    //           console.log(res);
    //           props.history.push("/jokes");
    //          window.localStorage.setItem("token",res.data.token);
    //       })
    //       .catch(err => {
    //           console.log(err);
    //       })
    //   }
    //   console.log("form values", formValues);
    //   return (
    //     <div>
    //       <form>
    //         <input placeholder="username" name="username" onChange={handleChange} />
           
    //         <input placeholder="password" name="password" onChange={handleChange} />
    //         <button onClick={handleSubmit} >Submit</button>
    //       </form>
    //     </div>
    //   );
    // }
    
    // export default Login;
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