import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  FormControl,
  FormHelperText,
  TextField,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  ThreeFriends,
  TopLinePrompt,
  Form,
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
    },
    formSideSmall: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    textField: {
      height: 66,
      marginBottom: 40,
      fontSize: 14,
      fontWeight: 600,
    },
  }));

  const classes = useStyles();

  const smallScreen = useMediaQuery("(max-width:1023px)");

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
            <TextField
              type="text"
              name="username"
              label="Username"
              aria-label="username"
              className={classes.textField}
              required
            />
          </FormControl>
          <FormControl>
            <TextField
              type="email"
              name="email"
              label="E-mail address"
              aria-label="e-mail address"
              className={classes.textField}
              required
            />
          </FormControl>
          <FormControl error={!!formErrorMessage.confirmPassword}>
            <TextField
              type="password"
              name="password"
              label="Password"
              aria-label="password"
              inputProps={{ minLength: 6 }}
              className={classes.textField}
              required
            />
            <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
          </FormControl>
          <FormControl error={!!formErrorMessage.confirmPassword}>
            <TextField
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              aria-label="confirm password"
              inputProps={{ minLength: 6 }}
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
