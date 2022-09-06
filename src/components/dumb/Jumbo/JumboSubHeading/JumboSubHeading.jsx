import React from "react";
import "./JumboSubHeading.css";

function JumboSubHeading({ children, ...rest }) {
  return (
    <h3 className="jumbo-sub-heading" {...rest}>
      {children}
    </h3>
  );
}

export default JumboSubHeading;
