import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    height: 66,
    marginBottom: 40,
    fontSize: 14,
    fontWeight: 600,
  },
}));

const AuthInput = ({
  label,
  type,
  name,
  ariaLabel,
  formErrorMessage,
  error,
  inputProps,
}) => {
  const classes = useStyles();
  return (
    <FormControl error={error}>
      <InputLabel>{label}</InputLabel>
      <Input
        type={type}
        name={name}
        aria-label={ariaLabel}
        className={classes.root}
        inputProps={inputProps}
        required
      />
      {formErrorMessage && <FormHelperText>{formErrorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default AuthInput;
