import React from "react";
import "./skew.scss";
import { useSelector } from "react-redux";
const Skew = () => {
  const isDarkMode = useSelector(state => state.isDarkMode);
  return (
    <div id="skewWrap" className={isDarkMode ? "dark" : ""}>
      <h2>
        DESIGN
        <hr />
        DEVELOP
        <hr />
        DEPLOY
      </h2>
    </div>
  );
};

export default Skew;
