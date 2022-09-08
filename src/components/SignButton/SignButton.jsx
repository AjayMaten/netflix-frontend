import React from "react";
import "./SignButton.css";

function SignButton({ children, ...rest }) {
  return (
    <button className="sign-form-btn" {...rest}>
      {children}
    </button>
  );
}

export default SignButton;
