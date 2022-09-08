import React from "react";
import "./SignTitle.css";

function SignTitle({ children, ...rest }) {
  return (
    <h1 className="sign-title" {...rest}>
      {children}
    </h1>
  );
}

export default SignTitle;
