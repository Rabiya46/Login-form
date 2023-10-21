// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const Inputs = ({ error, labelText, type }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateInput = (input) => {
    if (type === "email") {
      return input.includes("@");
    } else if (type === "password") {
      return input.length > 6;
    } else if (type === "age") {
      return parseInt(input) > 18;
    }
    return input !== "";
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setIsValid(validateInput(inputValue));
  };

  return (
    <div>
      <label>
        {labelText} <br />
      </label>
      <input
        type={type ? type : "text"}
        value={value}
        onChange={handleChange}
      />
      {!isValid ? <p style={{ color: "red" }}>{error}</p> : <p style={{color: "green"}}> Верно</p>}
    </div>
  );
};

export default Inputs;
