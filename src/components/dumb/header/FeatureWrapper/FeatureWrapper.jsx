import React from "react";
import "./FeatureWrapper.css";

function FeatureWrapper({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

export default FeatureWrapper;
