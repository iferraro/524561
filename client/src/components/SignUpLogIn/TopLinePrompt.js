import React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import WhiteButton from "./WhiteButton";
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
}));

const TopLinePrompt = ({ question, href, buttonText, smallScreen }) => {
  const classes = useStyles();
  return (
    <Box className={smallScreen ? classes.rootSmall : classes.root}>
      <Typography>{question}</Typography>
      <Link href={href} underline="none">
        <WhiteButton text={buttonText} smallScreen={smallScreen} />
      </Link>
    </Box>
  );
};

export default TopLinePrompt;
