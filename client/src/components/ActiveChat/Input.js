import React, { useState } from "react";
import {
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import ImageIcon from "@material-ui/icons/Image";

const cloudinaryURI = `https://api.cloudinary.com/v1_1/doo5nzoy0/image/upload`;

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
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
    const formData = new FormData();
    let tempURLs = [];
    for (let i = 0; i < fileList.length; i++) {
      let imageFile = fileList[i];
      formData.append("file", imageFile);
      formData.append("upload_preset", "h5mhaodh");
      const response = await fetch(cloudinaryURI, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      tempURLs.push(data.secure_url);
    }
    return tempURLs;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    let stagedFileList = formElements["files[]"].files;
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
          classes={{ root: classes.input }}
          onChange={handleChange}
          disableUnderline
          startAdornment={
            <InputAdornment position="start">
              <input
                type="file"
                name="files[]"
                accept="image/*"
                id="icon-button-file"
                multiple
                hidden
                onChange={handleImageChange}
              />
              <label htmlFor="icon-button-file">
                <IconButton aria-label="upload picture" component="span">
                  <AddAPhotoIcon style={{ color: "#BDBDBD" }} />
                </IconButton>
              </label>
              {imageCount > 0 && (
                <span style={{ fontWeight: 600, color: "#3A8DFF" }}>
                  <ImageIcon /> &times; {imageCount}
                </span>
              )}
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

export default Input;
