import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  Input,
  Link,
  useMediaQuery,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  ThreeFriends,
  TopLinePrompt,
  AuthInput,
} from "./components/SignUpLogIn/index";

const Login = ({ user, login }) => {
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
    if (user && user.id) history.push("/home");
  }, [user, history]);

  const useStyles = makeStyles(() => ({
    
  }));

  const loginClasses = useStyles();

  const smallScreen = useMediaQuery("(max-width:1023px)");

  return (
    <Box className={smallScreen ? loginClasses.rootSmall : loginClasses.root}>
      <ThreeFriends smallScreen={smallScreen} />
      <Container
        className={
          smallScreen ? loginClasses.formSideSmall : loginClasses.formSide
        }
      >
        <TopLinePrompt
          question="Don't have an account?"
          href="/register"
          buttonText="Create account"
          smallScreen={smallScreen}
        />
        <form
          onSubmit={handleLogin}
          className={
            smallScreen ? loginClasses.formsLoginSmall : loginClasses.formsLogin
          }
        >
          <AuthInput
            label="Username"
            type="text"
            name="username"
            ariaLabel="username"
          />
          <FormControl>
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              name="password"
              aria-label="password"
              endAdornment={
                <InputAdornment position="end">
                  <Link href="/" underline="none" color="primary">
                    Forgot?
                  </Link>
                </InputAdornment>
              }
              className={loginClasses.input}
              required
            />
          </FormControl>
          <Box className={loginClasses.buttonSpace}>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Login;
