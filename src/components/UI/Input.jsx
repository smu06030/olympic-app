import React from "react";
import classes from "~/css/Input.module.css";

const Input = ({ input }) => {
  return <input className={classes.input} {...input} />;
};

export default Input;
