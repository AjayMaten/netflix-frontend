import React from "react";
import "./SignCaptcha.css";

function SignCaptcha({ children, ...rest }) {
  return (
    <p className="sign-form-captcha" {...rest}>
      {children}
    </p>
  );
}

export default SignCaptcha;
