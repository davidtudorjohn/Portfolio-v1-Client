import React from "react";
import "./tech.scss";
const Tech = props => (
  <p className="tech" key={props.name}>
    {props.name}
  </p>
);
export default Tech;
