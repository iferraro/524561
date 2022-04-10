import React, { useState, useEffect } from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BGImg from "../../bg-img.png";
import Bubble from "../../bubble.svg";

const ThreeFriends = ({ signupHeight, smallScreen }) => {
  const [pictureHeight, setPictureHeight] = useState(0);

  useEffect(() => {
    setPictureHeight(
      Math.max(
        signupHeight,
        document.documentElement.getBoundingClientRect().height
      )
    );
  }, []);

  const renderPictureHeight = () => {
    setPictureHeight(
      Math.max(
        signupHeight,
        document.documentElement.getBoundingClientRect().height // this must actually be height of formside
      )
    );
    console.log(window.innerHeight);
    console.log(document.documentElement.scrollHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", renderPictureHeight);
    return () => window.removeEventListener("resize", renderPictureHeight);
  });

  const useStyles = makeStyles(() => ({
    root: {
      position: "relative",
      width: (425 * pictureHeight) / 700,
      // height: pictureHeight,
      minHeight: signupHeight,
      padding: 0,
      // backgroundColor: "magenta",
    },
    rootSmall: {
      position: "relative",
      width: "100vw",
      height: "33vh",
      padding: 0,
    },
    friendsImage: {
      position: "absolute",
      width: "inherit",
    },
    friendsImageSmall: {
      position: "absolute",
      height: "inherit",
      width: "100%",
      objectFit: "cover",
      objectPosition: "0 5%",
    },
    gradientLayer: {
      width: "inherit",
      height: "inherit",
      background: "linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)",
      mixBlendMode: "normal",
      opacity: 0.85,
      zIndex: 40,
    },
    textUnit: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 269,
      height: 186,
      transform: "translate(-50%, -50%)",
      zIndex: 40,
    },
    speechBubble: {
      position: "absolute",
      left: "50%",
      top: 0,
      transform: "translate(-50%, 0)",
      width: 67,
      height: 67,
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

  const classes = useStyles();
  return (
    <Container className={smallScreen ? classes.rootSmall : classes.root}>
      <img
        src={BGImg}
        alt="Background"
        className={
          smallScreen ? classes.friendsImageSmall : classes.friendsImage
        }
      />
      <Box className={classes.gradientLayer} />
      <Box className={classes.textUnit}>
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
    </Container>
  );
};

export default ThreeFriends;
