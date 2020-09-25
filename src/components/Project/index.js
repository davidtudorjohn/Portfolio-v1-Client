import React from "react";
import Techs from "../Techs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./project.scss";
import { useSelector } from "react-redux";
const Project = props => {
  const isDarkMode = useSelector(state => state.isDarkMode);

  return (
    <div className={`projectCard ${isDarkMode && "dark"}`}>
      <p className={`num ${isDarkMode && "dark"}`}>
        <FontAwesomeIcon
          icon={faArrowRight}
          className={isDarkMode ? "dark" : ""}
        />{" "}
        {props.num}
      </p>
      <h2 className={`projectTitle ${isDarkMode && "dark"}`}>{props.title}</h2>
      <Techs names={props.techs} />
      <p className={`description ${isDarkMode && "dark"}`}>
        {props.description}
      </p>
      <a
        className={`sourceBtn ${isDarkMode &&
          "dark"} ${props.sourceUnavailable && "disabled"}`}
        href={props.source}
      >
        {props.sourceUnavailable ? "Unavailable" : "Source Code"}
      </a>
      <br />
      <br />
      <br />
      <a
        className={`viewProjectBtn ${props.disabled} ${isDarkMode && "dark"}`}
        href={props.viewAt}
      >
        {props.youAreHere ? "You Are Here" : "View Project"}
      </a>
    </div>
  );
};
export default Project;
