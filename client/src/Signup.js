import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import { sharedClasses } from "./themes/signupLogin";
import ThreeFriends from "./components/SignUpLogIn/ThreeFriends";
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
          <h1 className={signupClasses.heading}>Create an account.</h1>
          <FormControl>
            <InputLabel>Username</InputLabel>
            <Input
              type="text"
              name="username"
              aria-label="username"
              className={signupClasses.input}
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel>E-mail address</InputLabel>
            <Input
              type="email"
              name="email"
              aria-label="e-mail address"
              className={signupClasses.input}
              required
            />
          </FormControl>
          <FormControl error={!!formErrorMessage.confirmPassword}>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              name="password"
              aria-label="password"
              className={signupClasses.input}
              inputProps={{ minLength: 6 }}
              required
            />
            <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
          </FormControl>
          <FormControl error={!!formErrorMessage.confirmPassword}>
            <InputLabel>Confirm Password</InputLabel>
            <Input
              type="password"
              name="confirmPassword"
              aria-label="confirm password"
              inputProps={{ minLength: 6 }}
              className={signupClasses.input}
              required
            />
            <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
          </FormControl>
          <div className={signupClasses.buttonSpace}>
            <BlueButton text="Create" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
