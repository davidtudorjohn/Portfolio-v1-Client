import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./more.scss";
import Feature from "../Feature";
import { useSelector } from "react-redux";
const More = () => {
  const isDarkMode = useSelector(state => state.isDarkMode);
  return (
    <>
      <Link to="/">
        <div id="backBtn" className={isDarkMode && "dark"}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            id="faArrowLeft"
            className={isDarkMode ? "dark" : ""}
          />
          <p id="backBtnText" className={isDarkMode && "dark"}>
            Back
          </p>
        </div>
      </Link>
      <div id="moreWrap" className={isDarkMode && "dark"}>
        <div id="moreCol1" className={isDarkMode && "dark"}>
          <Feature feature="Routing" tool="React Router" />
          <Feature feature="AJAX" tool="Fetch and axios" />
          <Feature feature="REST API" tool="AJAX, Node.js and Express.js" />
          <Feature
            feature="State Management"
            tool="Redux, Component State, and Context"
          />
          <Feature feature="Backend Framework" tool="Express.js" />
          <Feature feature="Data Management" tool="MySQL and MongoDB" />
        </div>
        <div id="moreCol2" className={isDarkMode && "dark"}>
          <Feature feature="CSS Preprocessing" tool="Sass" />
          <Feature feature="Package Management" tool="npm and yarn" />
          <Feature feature="Version Control" tool="Git and Github" />
          <Feature feature="Authentication" tool="bcryptjs and jsonwebtoken" />
          <Feature feature="Deployment" tool="Docker, AWS and Webpack" />
          <Feature feature="Unit Testing" tool="Jest" />
        </div>
      </div>
    </>
  );
};
export default More;
