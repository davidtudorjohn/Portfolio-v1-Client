import React from "react";
import "./tech.scss";
import { useSelector } from "react-redux";
const Tech = props => {
  const isDarkMode = useSelector(state => state.isDarkMode);
  return (
    <p className={isDarkMode ? "tech dark" : "tech"} key={props.name}>
      {props.name}
    </p>
  );
};
export default Tech;
