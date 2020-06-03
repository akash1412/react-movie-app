import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children }) => {
  return <button className="form__btn">{children}</button>;
};

export default CustomButton;
