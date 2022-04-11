import React from "react";
import { Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 380,
    padding: 0,
    marginTop: 86,
    marginLeft: 97,
    marginBottom: 106,
  },
  rootSmall: {
    display: "flex",
    flexDirection: "column",
    width: 350,
    padding: 0,
    marginBottom: 106,
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
    <Container className={smallScreen ? classes.rootSmall : classes.root}>
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
