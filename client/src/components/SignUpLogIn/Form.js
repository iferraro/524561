import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  rootSmall: { display: "flex", flexDirection: "column" },
  formSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "30px 42px 0 42px",
  },
  formSideSmall: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "30px 0",
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
  input: {
    height: 66,
    marginBottom: 40,
    fontSize: 14,
    fontWeight: 600,
  },
  buttonSpace: {
    display: "flex",
    justifyContent: "center",
    width: "inherit",
  },
  blueButton: {
    marginBottom: 10,
    fontSize: 26,
    fontWeight: 600,
  },
}));

const Form = ({ smallScreen, welcomeText, buttonText, children }) => {
  const classes = useStyles();
  return (
    <Box className={smallScreen ? classes.rootSmall : classes.root}>
      <Typography className={classes.root}>{welcomeText}</Typography>
      {children}
      <Button type="submit" variant="contained" className={classes.blueButton}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default Form;
