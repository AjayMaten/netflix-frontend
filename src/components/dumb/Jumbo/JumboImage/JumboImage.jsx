import React from "react";

function JumboImage({ ...rest }) {
  return <img className="jumbo-image" {...rest} alt="netflix-img" />;
}

export default JumboImage;
