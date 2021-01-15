import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  button: {
    background: "#000",
    color: "white"
  }
}));

export default function PrimaryButton(props) {
  const classes = useStyles();
  const { children, className, fullWidth = false } = props;

  return (
    <Button
      fullWidth={fullWidth}
      className={clsx(className, classes.button)}
      variant="contained"
    >
      {children}
    </Button>
  );
}
