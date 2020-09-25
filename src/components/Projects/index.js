import React from "react";
import "./projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Project from "../Project";
import { useSelector } from "react-redux";
const Projects = () => {
  const isDarkMode = useSelector(state => state.isDarkMode);

  return (
    <div id="projectsSection" className={isDarkMode && "dark"}>
      <h2 id="projectsHeading" className={isDarkMode && "dark"}>
        CHECK OUT SOME OF MY RECENT WORK <br />
        <FontAwesomeIcon
          icon={faArrowDown}
          className={isDarkMode ? "dark" : ""}
        />
      </h2>
      <div className={`projectsRow ${isDarkMode && "dark"}`}>
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
            "MongoDB",
            "Docker",
            "AWS"
          ]}
          description="A software engineer's portfolio"
          source="https://github.com/david-t-john/portfolio-v1"
          disabled="disabled"
          youAreHere={true}
        />
        <Project
          num="2"
          title="Emporia"
          techs={[
            "React.js",
            "ES6",
            "HTML5",
            "CSS3",
            "Sass",
            "Express.js",
            "Node.js",
            "MongoDB",
            "Docker",
            "AWS"
          ]}
          description="An ecommerce store for health products"
          source="https://github.com/david-t-john/emporia"
          viewAt="http://ec2-3-134-96-214.us-east-2.compute.amazonaws.com"
        />
        <Project
          num="3"
          title="MowUr"
          techs={["ES6", "HTML5", "CSS3", "Wordpress", "Stripe"]}
          description="A (production) marketplace web app for on-demand lawn mowing service"
          sourceUnavailable={true}
          viewAt="https://mowur.com"
        />
      </div>
    </div>
  );
};

export default Projects;
