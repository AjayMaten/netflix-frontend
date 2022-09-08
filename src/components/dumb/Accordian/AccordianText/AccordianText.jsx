import React from "react";
import "./AccordianText.css";

function AccordianText({ children, isOpen, ...rest }) {
  return (
    <div {...rest}>
      {isOpen ? <div className="accordian-text">{children}</div> : null}
    </div>
  );
}

export default AccordianText;
