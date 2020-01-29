import React from "react";
import "./projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Project from "../Project";
const Projects = () => (
  <div id="projectsSection">
    <h2 id="projectsHeading">
      CHECK OUT SOME OF MY RECENT WORK <br />
      <FontAwesomeIcon icon={faArrowDown} />
    </h2>
    <div id="projectsWrap">
      <Project
        num="1"
        title="This Portfolio"
        techs={[
          "React.js",
          "ES6",
          "HTML5",
          "CSS3",
          "Sass",
          "Redux",
          "Express.js",
          "Node.js",
          "MongoDB"
        ]}
        description="A software engineer's portfolio"
        source="https://github.com/david-t-john/portfolio-v1"
        disabled="disabled"
        youAreHere={true}
      />
      <Project
        num="2"
        title="Project Title"
        techs={[
          "React.js",
          "ES6",
          "HTML5",
          "CSS3",
          "Express.js",
          "MongoDB",
          "Node.js"
        ]}
        description="A short description of the project"
        source="https://github.com/david-t-john/portfolio-v1"
      />
      <Project
        num="3"
        title="MowUr"
        techs={["ES6", "HTML5", "CSS3", "Wordpress", "Stripe"]}
        description="A marketplace web app for on-demand lawn mowing service"
        source="https://github.com/david-t-john/portfolio-v1"
        viewAt="https://mowur.com"
      />
    </div>
  </div>
);

export default Projects;
