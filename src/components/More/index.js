import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./more.scss";
import Feature from "../Feature";

const More = () => (
  <div id="moreWrap">
    <Link to="/">
      <div id="backBtn">
        <FontAwesomeIcon icon={faArrowLeft} id="faArrowLeft" />
        <p id="backBtnText">Back</p>
      </div>
    </Link>
    <div id="moreCol1">
      <Feature feature="Routing" tool="React Router" />
      <Feature feature="REST API" tool="Fetch" />
      <Feature
        feature="State Management"
        tool="Redux, Component State, and Context"
      />
      <Feature feature="Backend Framework" tool="Express.js" />
      <Feature feature="Data Management" tool="MongoDB" />
    </div>
    <div id="moreCol2">
      <Feature feature="CSS Preprocessing" tool="Sass" />
      <Feature feature="Package Management" tool="npm and yarn" />
      <Feature feature="Version Control" tool="Git and Github" />
      <Feature feature="Deployment" tool="Webpack" />
      <Feature feature="Unit Testing" tool="Jest" />
      <br />
      <br />
      <br />
    </div>
  </div>
);
export default More;
