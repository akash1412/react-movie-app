import React from "react";

import "./sign-up-and-sign-in-page.style.scss";

//? IMPORTS
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignupSigninPage = () => {
  return (
    <div className="signup-signin-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignupSigninPage;
