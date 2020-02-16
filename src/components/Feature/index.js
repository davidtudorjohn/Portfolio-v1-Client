import React from "react";
import "./feature.scss";
import { useSelector } from "react-redux";
const Feature = props => {
  const isDarkMode = useSelector(state => state.isDarkMode);

  return (
    <div className={`featureWrap ${isDarkMode && "dark"}`}>
      <h1 className={`feature ${isDarkMode && "dark"}`}>{props.feature}</h1>
      <h3 className={`tool ${isDarkMode && "dark"}`}>with {props.tool}</h3>
    </div>
  );
};
export default Feature;
