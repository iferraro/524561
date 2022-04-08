import React from "react";
import { Box } from "@material-ui/core";

const ChatImages = ({ attachments }) => {
  const styles = {
    root:
      attachments.length === 1
        ? { maxWidth: "45vw", height: 100 }
        : { maxWidth: "45vw", height: 80 },
    image:
      attachments.length === 1
        ? {
            height: 100,
            width: 100,
            objectFit: "cover",
            objectPosition: "0% 0%",
            borderRadius: "10px 10px 0 10px",
          }
        : { height: "100%", marginLeft: 5, borderRadius: 10 },
  };
  return (
    <Box style={styles.root}>
      {attachments.map((url) => {
        return <img key={url} src={url} alt={url} style={styles.image} />;
      })}
    </Box>
  );
};

export default ChatImages;
