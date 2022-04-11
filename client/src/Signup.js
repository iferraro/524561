import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ThreeFriends,
  TopLinePrompt,
  Form,
} from "./components/SignUpLogIn/index";

const Signup = ({ user, register, smallScreen }) => {
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
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      flexDirection: "row",
      height: "100%",
    },
    rootSmall: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    formSide: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    formSideSmall: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    input: {
      height: 66,
      marginBottom: 40,
      fontSize: 14,
      fontWeight: 600,
    },
  }));

  const classes = useStyles();

  return (
    <Box className={smallScreen ? classes.rootSmall : classes.root}>
      <ThreeFriends smallScreen={smallScreen} />
      <Box className={smallScreen ? classes.formSideSmall : classes.formSide}>
        <TopLinePrompt
          question="Already have an account?"
          href="/login"
          buttonText="Login"
          smallScreen={smallScreen}
        />
        <Form
          welcomeText="Create an account."
          buttonText="Create"
          smallScreen={smallScreen}
          onSubmit={handleRegister}
        >
          <FormControl>
            <InputLabel>Username</InputLabel>
            <Input
              type="text"
              name="username"
              aria-label="username"
              className={classes.input}
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel>E-mail address</InputLabel>
            <Input
              type="email"
              name="email"
              aria-label="e-mail address"
              className={classes.input}
              required
            />
          </FormControl>
          <FormControl error={!!formErrorMessage.confirmPassword}>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              name="password"
              aria-label="password"
              inputProps={{ minLength: 6 }}
              className={classes.input}
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
              className={classes.input}
              required
            />
            <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
          </FormControl>
        </Form>
      </Box>
    </Box>
  );
};

export default Signup;
