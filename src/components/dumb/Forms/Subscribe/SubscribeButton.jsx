import React from "react";
import "./SubscribeButton.css";

function SubscribeButton({ children, ...rest }) {
  return (
    <>
      <a className="subscribe-btn" href="./Signup" {...rest}>
        {children}
      </a>
    </>
  );
}

export default SubscribeButton;
