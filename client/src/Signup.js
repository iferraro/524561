import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Box, Container, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { sharedClasses } from "./themes/shared";
import {
  ThreeFriends,
  TopLinePrompt,
  AuthInput,
  BlueButton,
} from "./components/SignUpLogIn/index";

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
    <Box className={smallScreen ? signupClasses.rootSmall : signupClasses.root}>
      <ThreeFriends smallScreen={smallScreen} />
      <Container
        className={
          smallScreen ? signupClasses.formSideSmall : signupClasses.formSide
        }
      >
        <TopLinePrompt
          question="Already have an account?"
          href="/login"
          buttonText="Login"
          smallScreen={smallScreen}
        />
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
      </Container>
    </Box>
  );
};

export default Signup;
