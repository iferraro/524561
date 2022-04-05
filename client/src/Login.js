import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Typography,
  FormControl,
  InputLabel,
  Input,
  makeStyles,
  useMediaQuery,
  InputAdornment,
} from "@material-ui/core";
import { sharedClasses } from "./themes/signupLogin";
import ThreeFriends from "./components/SignUpLogIn/ThreeFriends";
import WhiteButton from "./components/SignUpLogIn/WhiteButton";
import BlueButton from "./components/SignUpLogIn/BlueButton";

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

  const useStyles = makeStyles(sharedClasses);

  const loginClasses = useStyles();

  const smallScreen = useMediaQuery("(max-width:1023px)");

  return (
    <div className={smallScreen ? loginClasses.rootSmall : loginClasses.root}>
      <ThreeFriends />
      <div
        className={
          smallScreen ? loginClasses.formSideSmall : loginClasses.formSide
        }
      >
        <div
          className={
            smallScreen
              ? loginClasses.topLinePromptSmall
              : loginClasses.topLinePrompt
          }
        >
          <Typography>Don't have an account?</Typography>
          <Link
            href="/register"
            to="/register"
            style={{ textDecoration: "none" }}
          >
            <WhiteButton text="Create account" />
          </Link>
        </div>
        <form
          onSubmit={handleLogin}
          className={
            smallScreen ? loginClasses.formsLoginSmall : loginClasses.formsLogin
          }
        >
          <h1 className={loginClasses.heading}>Welcome Back!</h1>
          <FormControl>
            <InputLabel>Username</InputLabel>
            <Input
              type="text"
              name="username"
              aria-label="username"
              className={loginClasses.input}
              required
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
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "#3A8DFF" }}
                  >
                    Forgot?
                  </a>
                </InputAdornment>
              }
              className={loginClasses.input}
              required
            />
          </FormControl>
          <div className={loginClasses.buttonSpace}>
            <BlueButton text="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
