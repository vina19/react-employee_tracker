import React from "react";
import "./style.css";

// Wrapper component to wrapped each of the employee data.
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
};

export default Wrapper;
