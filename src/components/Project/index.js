import React from "react";
import Tech from "../Tech";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./project.scss";
const Project = props => (
  <div className="projectCard">
    <p className="num">
      <FontAwesomeIcon icon={faArrowRight} /> {props.num}
    </p>
    <h2 className="projectTitle">{props.title}</h2>
    {props.tech.map(t => (
      <Tech name={t} />
    ))}
    <p className="description">{props.description}</p>
    <a className="sourceBtn" href={props.source}>
      Source Code
    </a>
    <br />
    <br />
    <br />
    <a className={`viewProjectBtn ${props.disabled}`} href={props.viewAt}>
      View Project
    </a>
  </div>
);
export default Project;
