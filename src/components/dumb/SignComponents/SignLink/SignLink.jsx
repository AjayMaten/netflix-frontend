import React from "react";
import "./SignLink.css";
import { Link } from "react-router-dom";

function SignLink({ children, ...rest }) {
  return (
    <Link className="sign-link" {...rest}>
      {children}
    </Link>
  );
}

export default SignLink;
