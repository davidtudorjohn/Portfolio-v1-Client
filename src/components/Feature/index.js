import React from "react";
import "./feature.scss";
const Feature = props => (
  <div className="featureWrap">
    <h1 className="feature">{props.feature}</h1>
    <h3 className="tool">with {props.tool}</h3>
  </div>
);
export default Feature;
