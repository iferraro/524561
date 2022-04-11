import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FilledInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContentCopy from "../../content_copy_gray_24dp.svg";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";

const cloudinaryURI = `https://api.cloudinary.com/v1_1/doo5nzoy0/image/upload`;

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    marginBottom: 20,
    borderRadius: 8,
    fontWeight: 600,
    backgroundColor: "#F0F5F9",
  },
  sentimentIcon: {
    color: "#BFC9DB",
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const getURLs = async (fileList) => {
    const instance = axios.create();
    const fileArray = Object.values(fileList);

    const tempURLs = await Promise.all(
      fileArray.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "h5mhaodh");
        return instance.post(cloudinaryURI, formData);
      })
    );
    return tempURLs;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formElements = event.currentTarget.elements;
    const stagedFileList = formElements["files[]"].files;
    let imageURLs = [];
    if (stagedFileList.length) {
      imageURLs = (await getURLs(stagedFileList)).map((image) => {
        return image.data.secure_url;
      });
    }
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: imageURLs,
    };
    await postMessage(reqBody);
    setText("");
    formElements["files[]"].value = null;
    setLoading(false);
  };

  return (
    <form
      method="post"
      encType="multipart/form-data"
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <FormControl fullWidth hiddenLabel disabled={loading}>
        <FilledInput
          name="text"
          value={text}
          placeholder="Type something..."
          className={classes.input}
          onChange={handleChange}
          disableUnderline
          endAdornment={
            <InputAdornment position="start">
              <IconButton>
                <SentimentSatisfiedOutlinedIcon
                  className={classes.sentimentIcon}
                />
              </IconButton>
              <input
                type="file"
                name="files[]"
                accept="image/*"
                id="icon-button-file"
                multiple
                hidden
              />
              <InputLabel htmlFor="icon-button-file">
                <IconButton aria-label="upload picture" component="span">
                  <img src={ContentCopy} alt="upload" />
                </IconButton>
              </InputLabel>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

export default Input;
