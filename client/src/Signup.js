import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
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

  return (
    <Grid container justifyContent="flex-start">
      <Box sx={{ backgroundColor: "#004056" }}>
        <ThreeFriends />
      </Box>
      <Box sx={{ backgroundColor: "#AEA98B" }}>
        <Typography>Need to log in?</Typography>
        <Link href="/login" to="/login" underline="none">
          <WhiteButton text="Login" />
        </Link>
        <form onSubmit={handleRegister}>
          <Grid>
            <FormControl>
              <TextField
                aria-label="username"
                label="Username"
                name="username"
                type="text"
                required
              />
            </FormControl>
            <FormControl>
              <TextField
                label="E-mail address"
                aria-label="e-mail address"
                type="email"
                name="email"
                required
              />
            </FormControl>
            <FormControl error={!!formErrorMessage.confirmPassword}>
              <TextField
                aria-label="password"
                label="Password"
                type="password"
                inputProps={{ minLength: 6 }}
                name="password"
                required
              />
              <FormHelperText>
                {formErrorMessage.confirmPassword}
              </FormHelperText>
            </FormControl>
            <FormControl error={!!formErrorMessage.confirmPassword}>
              <TextField
                label="Confirm Password"
                aria-label="confirm password"
                type="password"
                inputProps={{ minLength: 6 }}
                name="confirmPassword"
                required
              />
              <FormHelperText>
                {formErrorMessage.confirmPassword}
              </FormHelperText>
            </FormControl>
            <BlueButton text="Create" />
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

export default Signup;
