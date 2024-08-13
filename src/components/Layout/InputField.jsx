import React from "react";
import Input from "~/components/UI/Input";
import classes from '~/css/InputField.module.css';

const InputField = ({data, value, minValue, onChange}) => {
  return (
    <div className={classes.inputField}>
      <label>{data.title}</label>
      <Input
        input={{
          type: data.type,
          value,
          onChange,
          min: minValue,
          placeholder: data.placeholder,
        }}
      />
    </div>
  );
};

export default InputField;
