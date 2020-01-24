import React, { useState } from "react";
import "./landing.scss";
import david from "./david.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import { like } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Tech from "../Tech";
const Landing = () => {
  // const [isLiked, setIsLiked] = useState(false);
  const isLiked = useSelector(state => state.isLiked);
  const dispatch = useDispatch();
  return (
    <div id="landing">
      <div id="col1">
        <div id="col1Content">
          <img id="portrait" src={david}></img>
          <div id="nameWrap">
            <h1 id="heading">David Tudor John</h1>
          </div>
          <div id="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} id="faMapMarkerAlt" />
            <p>Atlanta, GA</p>
          </div>
        </div>
      </div>
      <div id="col2">
        <div id="landingContent">
          <h2>Hello world!</h2>
          <p id="subHead">
            I develop things for the web using state-of-the-art technologies.
          </p>
          <br />
          <Tech name="React.js" />
          <Tech name="ES6" />
          <Tech name="HTML5" />
          <Tech name="CSS3" />
          <Tech name="Sass" />
          <Tech name="Redux" />
          <Tech name="Node.js" />
          <Tech name="Express.js" />
          <Tech name="MongoDB" />
          <Tech name="Wordpress" />
          <Tech name="Stripe" />
          <Tech name="Git" />
          <Tech name="Github" />
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
