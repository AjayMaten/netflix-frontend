import React from "react";
import SignButton from "../../dumb/SignComponents/SignButton/SignButton";
import SignCaptcha from "../../dumb/SignComponents/SignCaptcha/SignCaptcha";
import SignInput from "../../dumb/SignComponents/SignInput/SignInput";
import SignLink from "../../dumb/SignComponents/SignLink/SignLink";
import SignText from "../../dumb/SignComponents/SignText/SignText";
import SignTitle from "../../dumb/SignComponents/SignTitle/SignTitle";
import "./SignInComponent.css";

function SignInComponent() {
  return (
    <div className="sign-form-wrapper">
      <form className="sign-form-base">
        <SignTitle>SignIn</SignTitle>
        <SignInput type="text" placeholder="Email or phone number" />
        <SignInput type="password" placeholder="password" autoComplete="off" />
        <SignButton>Sign In</SignButton>
        <SignText>
          New to Netflix? <SignLink to="/SignUp">SignUp Now</SignLink>
        </SignText>
        <SignCaptcha>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </SignCaptcha>
      </form>
    </div>
  );
}

export default SignInComponent;
