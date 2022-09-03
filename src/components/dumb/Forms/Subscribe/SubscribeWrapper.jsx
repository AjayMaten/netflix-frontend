import React from "react";
import "./SubscribeWrapper.css";

function SubscribeWrapper({ children, ...rest }) {
  return (
    <div className="subscribe-wrapper" {...rest}>
      {children}
    </div>
  );
}

export default SubscribeWrapper;
