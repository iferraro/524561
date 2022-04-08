import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: 160,
    height: 56,
    color: "#FFF",
    background: "#3A8DFF",
    borderRadius: 3,
    zIndex: 30,
  },
}));

const BlueButton = ({ text }) => {
  const classes = useStyles();
  return (
    <Button type="submit" variant="contained" className={classes.root}>
      {text}
    </Button>
  );
};

export default BlueButton;
