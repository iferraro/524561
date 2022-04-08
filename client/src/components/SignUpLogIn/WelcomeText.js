import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 10,
    fontSize: 26,
    fontWeight: 600,
  },
}));

const WelcomeText = ({ text }) => {
  const classes = useStyles();
  return <Typography className={classes.root}>{text}</Typography>;
};

export default WelcomeText;
