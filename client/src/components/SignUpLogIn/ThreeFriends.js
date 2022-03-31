import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import BGImg from "../../bg-img.png";
import Bubble from "../../bubble.svg";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: 425,
    height: 700,
  },
  friendsImage: {
    width: 425,
    height: 700,
  },
  gradientLayer: {
    width: 425,
    height: 700,
    background: "linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)",
    mixBlendMode: "normal",
    opacity: 0.85,
    zIndex: 20,
  },
  speechBubble: {
    height: 67,
    width: 67,
    zIndex: 20,
  },
  slogan: {
    position: "absolute",
    height: 80,
    left: 0,
    right: 0,
    top: "calc(50% - 80px/2 + 53px)",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 26,
    lineHeight: 40,
    // or 154%
    textAlign: "center",
    color: "#000",
    zIndex: 20,
  },
}));

const ThreeFriends = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.gradientLayer}></div>
      <img src={Bubble} alt="Speech Bubble" className={classes.speechBubble} />
      <img src={BGImg} alt="Background" className={classes.friendsImage} />
      <p className={classes.slogan}>Converse with anyone with any language</p>
    </Box>
  );
};

export default ThreeFriends;
