import React, { useState } from "react";
import "./landing.scss";
import david from "./david.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faHeart,
  faHeartBroken
} from "@fortawesome/free-solid-svg-icons";
import { like } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
const Landing = () => {
  // let [isLiked, setIsLiked] = useState(false)
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
          <br></br>
          <p className="tech">React.js</p>
          <p className="tech">ES6</p>
          <p className="tech">HTML5</p>
          <p className="tech">CSS3</p>
          <p className="tech">Sass</p>
          <p className="tech">Redux</p>
          <p className="tech">Express.js</p>
          <p className="tech">MongoDB</p>
          <p className="tech">Wordpress</p>
          <p className="tech">Stripe</p>
          <p className="tech">Git</p>
          <p className="tech">Github</p>
          <br></br>
          <button id="likeBtn" onClick={() => dispatch(like())}>
            {/* onClick={()=>setIsLiked(isLiked= !isLiked)}> */}
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
