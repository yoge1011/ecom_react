import React from "react";

import "./form-input.style.scss";

const FormInput = ({ handleOnChange, label, ...props }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleOnChange} {...props} />
      {label ? (
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
