import React from "react";
import "./SignLink.css";

function SignLink({ children, ...rest }) {
  return (
    <a className="sign-link" {...rest}>
      {children}
    </a>
  );
}

export default SignLink;
