import React from "react";
import "./profile.scss";
import david from "./david.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const Profile = () => {
  const isDarkMode = useSelector(state => state.isDarkMode);
  return (
    <div id="col1Content">
      <img
        id="portrait"
        className={isDarkMode && "dark"}
        src={david}
        alt="portrait"
      ></img>
      <div id="nameWrap">
        <h1 id="heading" className={isDarkMode && "dark"}>
          David Tudor John
        </h1>
      </div>
      <div id="location">
        <FontAwesomeIcon icon={faMapMarkerAlt} id="faMapMarkerAlt" />
        <p className={isDarkMode && "dark"}>Atlanta, GA</p>
      </div>
    </div>
  );
};
export default Profile;
