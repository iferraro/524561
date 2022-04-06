import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
      maxWidth: "45vw"
  },
}));

const ChatImages = ({ attachments }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {attachments.map((url) => {
        return (
          <img
            key={url}
            src={url}
            alt={url}
            style={{ height: 80, borderRadius: 10 }}
          />
        );
      })}
    </Box>
  );
};

export default ChatImages;
