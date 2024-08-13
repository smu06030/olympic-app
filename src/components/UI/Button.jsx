import React, { useMemo } from "react";
import classes from "~/css/Button.module.css";

const Button = ({ onClick, children, type = null }) => {
  const btnColor = type === null ? "orange" : "red";

  return (
    <button
      onClick={onClick}
      className={`${btnColor === "orange" ? classes.orange : classes.red}`}
    >
      {children}
    </button>
  );
};

export default Button;
