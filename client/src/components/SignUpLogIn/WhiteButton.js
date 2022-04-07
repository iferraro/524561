import React from "react";
import { useMediaQuery, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: 170,
    height: 54,
    marginLeft: 30,
    color: "#3A8DFF",
    background: "#FFFFFF",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    borderRadius: 5,
  },
  rootSmall: {
    width: 170,
    height: 54,
    color: "#3A8DFF",
    background: "#FFFFFF",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    borderRadius: 5,
    marginLeft: 0,
  },
}));

const WhiteButton = ({ text }) => {
  const smallScreen = useMediaQuery("(max-width:1023px)");
  const classes = useStyles();
  return (
    <Button className={smallScreen ? classes.rootSmall : classes.root}>
      {text}
    </Button>
  );
};

export default WhiteButton;
