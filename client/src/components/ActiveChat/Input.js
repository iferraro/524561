import React, { useState } from "react";
import {
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

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
  const [stagedFileList, setStagedFileList] = useState({});
  const [imageURLs, setImageURLs] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleStagingChange = (event) => {
    setStagedFileList(event.target.files);
  };

  const uploadImages = async () => {
    const formData = new FormData();
    for (let i = 0; i < stagedFileList.length; i++) {
      let imageFile = stagedFileList[i];
      formData.append("file", imageFile);
      formData.append("upload_preset", "h5mhaodh");
      const response = await fetch(cloudinaryURI, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setImageURLs([...imageURLs, data.secure_url]);
      console.log(data, "<= data after upload");
      console.log(imageURLs, "<= imageURLs at this stage");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(stagedFileList, "<= stagedFileList");
    if (stagedFileList.length) {
      await uploadImages();
    }
    // const form = event.currentTarget;
    // const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      // text: formElements.text.value,
      text: text,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: imageURLs.length ? imageURLs : [],
    };
    console.log(reqBody, "<= reqBody");
    await postMessage(reqBody);
    setText("");
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
                name="stagedFileList"
                accept="image/*"
                id="icon-button-file"
                multiple
                hidden
                onChange={handleStagingChange}
              />
              <label htmlFor="icon-button-file">
                <IconButton aria-label="upload picture" component="span">
                  <AddAPhotoIcon style={{ color: "#BDBDBD" }} />
                </IconButton>
              </label>
              {stagedFileList.length && <span>{stagedFileList[0].length}</span>}
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

export default Input;
