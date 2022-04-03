import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: 170,
    height: 54,
    margin: "0 42px 0px 30px",
    color: "#3A8DFF",
    background: "#FFFFFF",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    borderRadius: 5,
  },
}));

const WhiteButton = ({ text }) => {
  const classes = useStyles();
  return <Button className={classes.root}>{text}</Button>;
};

export default WhiteButton;
