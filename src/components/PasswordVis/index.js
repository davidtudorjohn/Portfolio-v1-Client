import React from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./passwordvis.scss";
const PasswordVis = props => (
  <button onClick={props.action} id="showHidePassword">
    {props.visibility ? (
      <FontAwesomeIcon icon={faEyeSlash} id="faEyeSlash" />
    ) : (
      <FontAwesomeIcon icon={faEye} id="faEye" />
    )}
  </button>
);
export default PasswordVis;
