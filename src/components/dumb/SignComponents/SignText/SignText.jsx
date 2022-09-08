import React from "react";
import "./SignText.css";

function SignText({ children, ...rest }) {
  return (
    <p className="sign-text" {...rest}>
      {children}
    </p>
  );
}

export default SignText;
