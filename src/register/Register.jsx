import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./Register-style.css";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };

  const [submitted, setSubmitted] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    window.alert("Registration successful!");
    resetForm();
  };

  return (
    <div className="register-container">
      <div className="registration-form">
        <h1>Registration Form</h1>
        {submitted ? (
          <div className="success-message">Registration successful!</div>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div>
                  <label htmlFor="name">Name &nbsp;</label>
                  <br />
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeHolder="Enter Your Name"
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div>
                  <label htmlFor="email">Email &nbsp;</label>
                  <br />
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeHolder="Enter Your Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <label htmlFor="password">Password&nbsp;</label>
                  <br />
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeHolder="Enter Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword">
                    Confirm Password&nbsp;
                  </label>
                  <br />
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeHolder="Re-Enter Password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error"
                  />
                </div>

                <div>
                  <Field type="checkbox" id="acceptTerms" name="acceptTerms" />
                  <label htmlFor="acceptTerms">
                    &nbsp;&nbsp;I accept the terms and conditions
                  </label>
                  <ErrorMessage
                    name="acceptTerms"
                    component="div"
                    className="error"
                  />
                </div>
                <button className="register-btn" type="submit">
                  Register
                </button>
                <br />
                <a className="register-a">
                  <Link to="/dashboard/login">Back to Login</Link>
                </a>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
