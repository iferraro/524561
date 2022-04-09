import React from "react";
import { Box, Button, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "inherit",
    color: "#B0B0B0",
  },
  rootSmall: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "inherit",
    color: "#B0B0B0",
  },
  whiteButton: {
    width: 170,
    height: 54,
    marginLeft: 30,
    color: "#3A8DFF",
    background: "#FFFFFF",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    borderRadius: 5,
    textDecoration: "none",
  },
  whiteButtonSmall: {
    width: 170,
    height: 54,
    color: "#3A8DFF",
    background: "#FFFFFF",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    borderRadius: 5,
    marginLeft: 0,
    textDecoration: "none",
  },
}));

const TopLinePrompt = ({ question, href, buttonText, smallScreen }) => {
  const classes = useStyles();
  return (
    <Box className={smallScreen ? classes.rootSmall : classes.root}>
      <Typography>{question}</Typography>
      <Link href={href} underline="none">
        <Button
          className={
            smallScreen ? classes.whiteButtonSmall : classes.whiteButton
          }
        >
          {buttonText}
        </Button>
      </Link>
    </Box>
  );
};

export default TopLinePrompt;
