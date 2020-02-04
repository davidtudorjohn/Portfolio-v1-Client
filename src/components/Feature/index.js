import React from "react";
import "./feature.scss";
import { useSelector } from "react-redux";
const Feature = props => {
  const isDarkMode = useSelector(state => state.isDarkMode);

  return (
    <div className={isDarkMode ? "featureWrap dark" : "featureWrap"}>
      <h1 className={isDarkMode ? "feature dark" : "feature"}>
        {props.feature}
      </h1>
      <h3 className={isDarkMode ? "tool dark" : "tool"}>with {props.tool}</h3>
    </div>
  );
};
export default Feature;
