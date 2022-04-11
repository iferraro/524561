import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ThreeFriends,
  TopLinePrompt,
  Form,
} from "./components/SignUpLogIn/index";

const Login = ({ user, login, smallScreen }) => {
  
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
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
    forgotText: {
      fontSize: 12,
      fontWeight: 600,
    },
  }));

  const classes = useStyles();

  return (
    <Box className={smallScreen ? classes.rootSmall : classes.root}>
      <ThreeFriends smallScreen={smallScreen} />
      <Box className={smallScreen ? classes.formSideSmall : classes.formSide}>
        <TopLinePrompt
          question="Don't have an account?"
          href="/register"
          buttonText="Create account"
          smallScreen={smallScreen}
        />
        <Form
          welcomeText="Welcome Back!"
          buttonText="Login"
          smallScreen={smallScreen}
          onSubmit={handleLogin}
        >
          <FormControl margin="normal" required>
            <InputLabel>Username</InputLabel>
            <Input
              type="text"
              name="username"
              aria-label="username"
              className={classes.input}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              name="password"
              aria-label="password"
              endAdornment={
                <InputAdornment position="end">
                  <Link
                    href="/"
                    underline="none"
                    color="primary"
                    className={classes.forgotText}
                  >
                    Forgot?
                  </Link>
                </InputAdornment>
              }
              className={classes.input}
              required
            />
          </FormControl>
        </Form>
      </Box>
    </Box>
  );
};

export default Login;
