import React from "react";
import { Box, Typography } from "@material-ui/core";
import ChatImages from "./ChatImages";

const MessageContent = ({ text, attachments, bubbleClass, textClass }) => {
  return (
    <>
      {attachments.length > 1 && <ChatImages attachments={attachments} />}
      <Box className={bubbleClass}>
        {attachments.length === 1 && <ChatImages attachments={attachments} />}
        {text.length > 0 && (
          <Typography className={textClass}>{text}</Typography>
        )}
      </Box>
    </>
  );
};

export default MessageContent;
