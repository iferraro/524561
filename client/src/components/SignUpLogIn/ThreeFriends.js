import React from "react";
import { makeStyles, Grid, Box, Typography } from "@material-ui/core";
import BGImg from "../../bg-img.png";
import Bubble from "../../bubble.svg";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
  friendsImage: {
    // position: "absolute",
    height: "100vh",
  },
  gradientLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)",
    mixBlendMode: "normal",
    opacity: 0.85,
    zIndex: 20,
    overflow: "hidden",
  },
  iconUnit: {
    position: "absolute",
    top: "42%",
    left: "50%",
    width: 269,
    height: 187,
    transform: "translate(-50%, -50%)",
    zIndex: 40,
  },
  speechBubble: {
    position: "absolute",
    left: "50%",
    top: 0,
    transform: "translate(-50%, 0)",
    height: 67,
    width: 67,
  },
  slogan: {
    position: "absolute",
    bottom: 0,
    height: 80,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 26,
    textAlign: "center",
    color: "#FFF",
  },
}));

const ThreeFriends = () => {
  const classes = useStyles();
  return (
    <Grid item className={classes.root}>
      <img src={BGImg} alt="Background" className={classes.friendsImage} />
      <Box component="div" className={classes.gradientLayer}></Box>
      <Box component="div" className={classes.iconUnit}>
        <img
          src={Bubble}
          alt="Speech Bubble"
          className={classes.speechBubble}
        />
        <Typography className={classes.slogan}>
          Converse with anyone <br />
          with any language
        </Typography>
      </Box>
    </Grid>
  );
};

export default ThreeFriends;
