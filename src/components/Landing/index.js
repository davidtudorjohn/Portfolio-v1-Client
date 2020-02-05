import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./landing.scss";
import Profile from "../Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Techs from "../Techs";
const Landing = () => {
  const [isLiked, setIsLiked] = useState(false);
  const isDarkMode = useSelector(state => state.isDarkMode);
  return (
    <div id="landing">
      <div id="col1" className={isDarkMode ? "dark" : ""}>
        <Profile />
      </div>
      <div id="col2" className={isDarkMode ? "dark" : ""}>
        <div id="landingContent" className={isDarkMode ? "dark" : ""}>
          <h2 className={isDarkMode ? "dark" : ""}>Hello world!</h2>
          <p id="subHead" className={isDarkMode ? "dark" : ""}>
            I develop things for the web using state-of-the-art technologies.
          </p>
          <Link to="/more">
            <div id="learnMoreWrap">
              <FontAwesomeIcon
                id="faArrowRight"
                icon={faArrowRight}
                className={isDarkMode ? "dark" : ""}
              />
              <p id="learnMore" className={isDarkMode ? "dark" : ""}>
                {" "}
                Learn more
              </p>
              <br />
              <br />
            </div>
          </Link>
          <br />
          <Techs
            names={[
              "React.js",
              "ES6",
              "HTML5",
              "CSS3",
              "Sass",
              "Redux",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Wordpress",
              "Stripe",
              "Git",
              "Github"
            ]}
          />
          <br />
          <button
            id="likeBtn"
            className={isDarkMode ? "dark" : ""}
            onClick={() => setIsLiked(!isLiked)}
          >
            <FontAwesomeIcon
              icon={faHeart}
              id="faHeart"
              className={isLiked ? "heartRed" : "heartGray"}
            />
            {isLiked ? " Liked" : " Like"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Landing;
