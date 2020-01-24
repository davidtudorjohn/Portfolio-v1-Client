import React from "react";
import "./projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Projects = () => (
  <div id="projectSection">
    <h2 id="projectHeading">
      CHECK OUT SOME OF MY RECENT WORK <br />
      <FontAwesomeIcon icon={faArrowDown} />
    </h2>
    <div id="projectsWrap">
      <div className="projectCard">
        <p className="num">
          <FontAwesomeIcon icon={faArrowRight} /> 1
        </p>
        <h2 className="projectTitle">This Portfolio</h2>
        <p className="tech">React.js</p>
        <p className="tech">ES6</p>
        <p className="tech">HTML5</p>
        <p className="tech">CSS3</p>
        <p className="tech">Sass</p>
        <p className="tech">Redux</p>
        <p className="description">A software engineer's portfolio</p>
        <a
          className="sourceBtn"
          href="https://github.com/david-t-john/portfolio-v1"
        >
          Source Code
        </a>
        <br />
        <br />
        <br />
        <a className="viewProjectBtn disabled">You Are Here</a>
      </div>
      <div className="projectCard">
        <p className="num">
          <FontAwesomeIcon icon={faArrowRight} /> 2
        </p>
        <h2 className="projectTitle">Project Title</h2>
        <p className="tech">React.js</p>
        <p className="tech">ES6</p>
        <p className="tech">HTML5</p>
        <p className="tech">CSS3</p>
        <p className="tech">Express.js</p>
        <p className="tech">MongoDB</p>
        <p className="description">A short description of the project</p>
        <a className="sourceBtn" href="https://github.com/david-t-john">
          Source Code
        </a>
        <br />
        <br />
        <br />
        <a className="viewProjectBtn" href="#">
          View Project
        </a>
      </div>
      <div className="projectCard">
        <p className="num">
          <FontAwesomeIcon icon={faArrowRight} /> 3
        </p>
        <h2 className="projectTitle">MowUr</h2>
        <p className="tech">ES6</p>
        <p className="tech">HTML5</p>
        <p className="tech">CSS3</p>
        <p className="tech">Wordpress</p>
        <p className="tech">Stripe</p>
        <p className="description">
          A marketplace web app for on-demand lawn mowing service
        </p>
        <a className="sourceBtn" href="#">
          Source Code
        </a>
        <br />
        <br />
        <br />
        <a className="viewProjectBtn" href="https://mowur.com">
          View Project
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
