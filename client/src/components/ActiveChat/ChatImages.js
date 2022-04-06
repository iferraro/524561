import React from "react";

const ChatImages = ({ attachments }) => {
  const styles = {
    root:
      attachments.length === 1
        ? { maxWidth: "45vw", height: 100 }
        : { maxWidth: "45vw", height: 80 },
    image:
      attachments.length === 1
        ? {
            height: "100%",
            borderRadius: "10px 10px 0 10px",
          }
        : { height: "100%", marginLeft: 5 },
  };
  return (
    <div style={styles.root}>
      {attachments.map((url) => {
        return <img key={url} src={url} alt={url} style={styles.image} />;
      })}
    </div>
  );
};

export default ChatImages;
