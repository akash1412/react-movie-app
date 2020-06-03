import React from "react";

import "./form-input.style.scss";

const FormInput = ({ type, label, ...otherProps }) => {
  return (
    <div className="form_input-block">
      <input className="form__input" type={type} {...otherProps} />
      {label ? <label className="form__label">{label}</label> : null}
    </div>
  );
};

export default FormInput;
