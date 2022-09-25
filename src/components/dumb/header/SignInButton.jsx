import React from "react";
import { Link } from "react-router-dom";
import "./SignInButton.css";

function SignInButton() {
  return (
    <Link to="/SignIn">
      <button className="signInBtn">Sign In</button>
    </Link>
  );
}

export default SignInButton;
