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
    textAlign: "center",
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
    width: 20,
    height: 20,
    margin: "10px 0 20px 0",
  },
}));

const SenderBubble = ({ time, text, attachments, otherUser }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      {attachments.length !== 1 && <ChatImages attachments={attachments} />}
      <Box className={classes.bubble}>
        {attachments.length === 1 && <ChatImages attachments={attachments} />}
        {text.length > 0 && (
          <Typography className={classes.text}>{text}</Typography>
        )}
      </Box>
      {attachments.length > 0 && (
        <Avatar
          alt={otherUser.username}
          src={otherUser.photoUrl}
          className={classes.profilePic}
        />
      )}
    </Box>
  );
};

export default SenderBubble;
