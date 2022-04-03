import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  // div,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  TextField,
  FormHelperText,
  makeStyles,
} from "@material-ui/core";
import { sharedClasses } from "./themes/signuplogin";
import ThreeFriends from "./components/SignUpLogIn/ThreeFriends";
import BlueButton from "./components/SignUpLogIn/BlueButton";
import WhiteButton from "./components/SignUpLogIn/WhiteButton";

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

  const useStyles = makeStyles(() => {
    return sharedClasses;
  });

  const signupClasses = useStyles();

  return (
    <div className={signupClasses.root}>
      <ThreeFriends />
      <div className={signupClasses.formSide}>
        <div className={signupClasses.topLinePrompt}>
          <Typography>Already have an account?</Typography>
          <Link href="/login" to="/login" underline="none">
            <WhiteButton text="Login" />
          </Link>
        </div>
        <form onSubmit={handleRegister} className={signupClasses.forms}>
          <heading className={signupClasses.heading}>
            Create an account.
          </heading>
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
