import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FilledInput,
  InputLabel,
  InputBase,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContentCopy from "../../content_copy_gray_24dp.svg";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
// import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
// import ImageIcon from "@material-ui/icons/Image";

const cloudinaryURI = `https://api.cloudinary.com/v1_1/doo5nzoy0/image/upload`;

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F0F5F9",
    borderRadius: 8,
    marginBottom: 20,
  },
  sentimentIcon: {
    color: "#BFC9DB",
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [imageCount, setImageCount] = useState(0);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageCount(event.target.files.length);
  };

  const getURLs = async (fileList) => {
    const instance = axios.create();
    const formData = new FormData();
    let tempURLs = [];
    for (let i = 0; i < fileList.length; i++) {
      const imageFile = fileList[i];
      formData.append("file", imageFile);
      formData.append("upload_preset", "h5mhaodh");
      try {
        const response = await instance.post(cloudinaryURI, formData);
        tempURLs[i] = response.data.secure_url;
      } catch (error) {
        console.error(error);
      }
    }
    return Promise.all(tempURLs);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const stagedFileList = formElements["files[]"].files;
    let imageURLs = [];
    if (stagedFileList.length) {
      imageURLs = await getURLs(stagedFileList);
    }
        // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: imageURLs,
    };
    console.log(reqBody, "<= reqBody");
    await postMessage(reqBody);
    setText("");
    formElements["files[]"].value = null;
    setImageCount(0);
  };

  return (
    <form
      method="post"
      encType="multipart/form-data"
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <FormControl fullWidth hiddenLabel>
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
                onChange={handleImageChange}
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
