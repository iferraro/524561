import React from "react";
import { Box, Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 380,
    padding: 0
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 600,
    marginBottom: 12,
  },
  formElement: {
    display: "flex",
    flexDirection: "column",
  },
  formsSignup: {
    display: "flex",
    flexDirection: "column",
    width: 380,
    marginTop: 20,
  },
  formsSignupSmall: {
    display: "flex",
    flexDirection: "column",
    width: 350,
    marginTop: 20,
  },
  formsLogin: {
    display: "flex",
    flexDirection: "column",
    width: 380,
    marginTop: 86,
  },
  formsLoginSmall: {
    display: "flex",
    flexDirection: "column",
    width: 350,
    marginTop: 86,
  },
  //   buttonSpace: {
  //     display: "flex",
  //     justifyContent: "center",
  //     width: "inherit",
  //   },
  blueButton: {
    width: 160,
    height: 56,
    borderRadius: 3,
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 24,
    margin: "40px auto 0 auto",
    color: "#FFF",
    background: "#3A8DFF",
  },
}));

const Form = ({ smallScreen, welcomeText, buttonText, onSubmit, children }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography className={classes.welcomeText}>{welcomeText}</Typography>
      <form onSubmit={onSubmit} className={classes.formElement}>
        {children}
        <Button
          type="submit"
          variant="contained"
          className={classes.blueButton}
        >
          {buttonText}
        </Button>
      </form>
    </Container>
  );
};

export default Form;
