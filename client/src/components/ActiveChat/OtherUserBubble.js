import React from "react";
import { Box, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MessageContent from "./MessageContent";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: 8,
  },
}));

const OtherUserBubble = ({ time, text, attachments, otherUser }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Typography className={classes.usernameDate}>
        {otherUser.username} {time}
      </Typography>
      <MessageContent
        text={text}
        attachments={attachments}
        bubbleClass={classes.bubble}
        textClass={classes.text}
      />
    </Box>
  );
};

export default OtherUserBubble;
