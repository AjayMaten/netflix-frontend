import React from "react";
import SignButton from "../../dumb/SignComponents/SignButton/SignButton";
import SignCaptcha from "../../dumb/SignComponents/SignCaptcha/SignCaptcha";
import SignInput from "../../dumb/SignComponents/SignInput/SignInput";
import SignLink from "../../dumb/SignComponents/SignLink/SignLink";
import SignText from "../../dumb/SignComponents/SignText/SignText";
import SignTitle from "../../dumb/SignComponents/SignTitle/SignTitle";
import "./SignUpComponent.css";

function SignUpComponent() {
  return (
    <div className="sign-form-wrapper">
      <form className="sign-form-base">
        <SignTitle>SignUp</SignTitle>
        <SignInput type="text" placeholder="User Name" />
        <SignInput type="text" placeholder="Email or phone number" />
        <SignInput type="password" placeholder="password" autoComplete="off" />
        <SignButton>SignUp</SignButton>
        <SignText>
          Already a User? <SignLink to="/SignIn">SignIn Now</SignLink>
        </SignText>
        <SignCaptcha>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </SignCaptcha>
      </form>
    </div>
  );
}

export default SignUpComponent;
