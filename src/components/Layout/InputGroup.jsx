import React, { useState } from "react";
import InputField from "~/components/Layout/InputField";
import Button from "~/components/UI/Button";
import classes from "~/css/InputGroup.module.css";
import useCounty from "../../hooks/useCounty";

const INPUT_DUMMY = [
  { id: "country", title: "국가명", type: "text", placeholder: "국가 입력" },
  { id: "gold", title: "금메달", type: "number", placeholder: "0" },
  { id: "silver", title: "은메달", type: "number", placeholder: "0" },
  { id: "bronze", title: "동메달", type: "number", placeholder: "0" },
];

const InputGroup = ({ inputValue, addCountry, updateCountry, onChangeHandler }) => {
  const inputField = INPUT_DUMMY.map((data) => (
    <InputField
      key={data.id}
      data={data}
      value={inputValue[data.id]}
      minValue="0"
      onChange={(e) =>
        onChangeHandler(
          data.id,
          data.type === "number" ? parseInt(e.target.value) : e.target.value
        )
      }
    />
  ));

  return (
    <form className={classes.inputGroup}>
      {inputField}

      <div className={classes.buttonGroup}>
        <Button onClick={addCountry}>국가 추가</Button>
        <Button onClick={updateCountry}>업데이트</Button>
      </div>
    </form>
  );
};

export default InputGroup;
