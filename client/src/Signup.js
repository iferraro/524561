import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { sharedClasses } from "./themes/shared";
import ThreeFriends from "./components/SignUpLogIn/ThreeFriends";
import AuthInput from "./components/SignUpLogIn/AuthInput";
import WhiteButton from "./components/SignUpLogIn/WhiteButton";
import BlueButton from "./components/SignUpLogIn/BlueButton";

const Signup = ({ user, register }) => {
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  const useStyles = makeStyles(sharedClasses);

  const signupClasses = useStyles();

  const smallScreen = useMediaQuery("(max-width:1023px)");

  return (
    <div className={smallScreen ? signupClasses.rootSmall : signupClasses.root}>
      <ThreeFriends />
      <div
        className={
          smallScreen ? signupClasses.formSideSmall : signupClasses.formSide
        }
      >
        <div
          className={
            smallScreen
              ? signupClasses.topLinePromptSmall
              : signupClasses.topLinePrompt
          }
        >
          <Typography>Already have an account?</Typography>
          <Link href="/login" to="/login" style={{ textDecoration: "none" }}>
            <WhiteButton text="Login" />
          </Link>
        </div>
        <form
          onSubmit={handleRegister}
          className={
            smallScreen
              ? signupClasses.formsSignupSmall
              : signupClasses.formsSignup
          }
        >
          <Typography className={signupClasses.heading}>
            Create an account.
          </Typography>
          <AuthInput
            label="Username"
            type="text"
            name="username"
            ariaLabel="username"
          />
          <AuthInput
            label="E-mail Address"
            type="email"
            name="email"
            ariaLabel="e-mail address"
          />
          <AuthInput
            error={!!formErrorMessage.confirmPassword}
            label="Password"
            type="password"
            name="password"
            ariaLabel="password"
            inputProps={{ minLength: 6 }}
          />
          <AuthInput
            error={!!formErrorMessage.confirmPassword}
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            ariaLabel="confirm password"
            inputProps={{ minLength: 6 }}
            formErrorMessage={formErrorMessage.confirmPassword}
          />
          <Box className={signupClasses.buttonSpace}>
            <BlueButton text="Create" />
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Signup;
