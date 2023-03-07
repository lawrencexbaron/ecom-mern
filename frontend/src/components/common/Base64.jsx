import React from "react";
// create an component to output base64 string to image tag src from props
const Base64 = ({ props }) => {
  return <img src={props.base64} className={props.class} alt="product" />;
};
export default Base64;
