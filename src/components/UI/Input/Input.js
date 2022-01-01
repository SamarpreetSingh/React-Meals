import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes["input-div"]}>
      <label className={classes.label} htmlFor={props.id}>
        {props.label}:
      </label>
      <input className={classes.input} ref={ref} {...props} />
    </div>
  );
});

export default Input;
