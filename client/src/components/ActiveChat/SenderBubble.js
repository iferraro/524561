import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";
import ChatImages from "./ChatImages";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
  profilePic: {
    width: 30,
    height: 30,
  },
}));

const SenderBubble = ({ time, text, attachments, otherUser }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <ChatImages attachments={attachments} />
      <Box className={classes.bubble}>
        {text.length > 0 ? (
          <Typography className={classes.text}>{text}</Typography>
        ) : (
          <Avatar
            alt={otherUser.username}
            src={otherUser.photoUrl}
            className={classes.profilePic}
          />
        )}
      </Box>
    </Box>
  );
};

export default SenderBubble;
