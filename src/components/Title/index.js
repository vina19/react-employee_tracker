import React from "react";
import "./style.css";

// Title for the page component.
function Title(props) {
  return <h1 className="title">{props.children}</h1>;
};

export default Title;
