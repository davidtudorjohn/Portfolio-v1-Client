import React from "react";
import "./profile.scss";
import david from "./david.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const Profile = () => (
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
);
export default Profile;
