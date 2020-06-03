import React from "react";

import "./sign-up.style.scss";

//?IMPORTS
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignUp = () => {
  return (
    <div className="sign-in">
      <h2>Already have an account? </h2>
      <form className="form">
        <FormInput
          type="text"
          label="username"
          placeholder="username"
          name="username"
          value=""
          required
          autoComplete="off"
        />
        <FormInput
          type="email"
          label="Email"
          placeholder="Email"
          name="email"
          value=""
          required
          autoComplete="off"
        />
        <FormInput
          type="password"
          label="password"
          placeholder="password"
          name="password"
          value=""
          required
        />
        <FormInput
          type="password"
          label="Confirm password"
          placeholder="Confirm password"
          name="Confirm password"
          value=""
          required
        />
        <div className="form__btn-container">
          <CustomButton>SignIn</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
