import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./UserLogin-style.css";

const UserLogin = ({ history }) => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Predefined login credentials
  const validCredentials = {
    username: "User",
    password: "123456",
  };

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (
      values.username === validCredentials.username &&
      values.password === validCredentials.password
    ) {
      setLoginSuccess(true);
      history.push("/dashboard/freightdetails");
    } else {
      alert("Invalid username or password");
      resetForm();
    }
  };

  return (
    <div className="dash-details">
      <div className="user-login-dashboard">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="login">
                <h3> User Login</h3>
              </div>

              <div className="input-box">
                <Field type="text" name="username" placeholder="Username" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
              </div>

              <div className="input-box" id="pass-box">
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <div className="forgot-box">
                <a href="#">Forgot Password?</a>
              </div>

              <Link to="/dashboard/frieghtdetails">
                <button type="submit" className="btn">
                  Login
                </button>
              </Link>

              <div className="register-link">
                <p>
                  Don't have an account?{" "}
                  <Link to="/dashboard/register">Register</Link>{" "}
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserLogin;
