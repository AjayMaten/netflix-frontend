import React from "react";
import "./SubscribeEmail.css";

function SubscribeEmail({ children, ...rest }) {
  return <input className="subscribe-email" {...rest} />;
}

export default SubscribeEmail;
