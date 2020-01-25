import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./landing.scss";
import Profile from "../Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { like } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Techs from "../Techs";
const Landing = () => {
  // const [isLiked, setIsLiked] = useState(false);
  const isLiked = useSelector(state => state.isLiked);
  const dispatch = useDispatch();
  return (
    <div id="landing">
      <div id="col1">
        <Profile />
      </div>
      <div id="col2">
        <div id="landingContent">
          <h2>Hello world!</h2>
          <p id="subHead">
            I develop things for the web using state-of-the-art technologies.
          </p>
          <Link to="/more">
            <div id="learnMoreWrap">
              <FontAwesomeIcon id="faArrowRight" icon={faArrowRight} />
              <p id="learnMore"> Learn more</p>
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
          <button id="likeBtn" onClick={() => dispatch(like())}>
            {/* onClick={() => setIsLiked(!isLiked)}
          > */}
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
