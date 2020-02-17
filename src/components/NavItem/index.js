import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navitem.scss";
import { useSelector } from "react-redux";
const NavItem = props => {
  const isDarkMode = useSelector(state => state.isDarkMode);
  return (
    <li className={`${props.class} ${isDarkMode && "dark"}`}>
      <a href={props.href} onClick={props.action}>
        {props.icon && <FontAwesomeIcon id={props.icon} icon={props.icon} />}
        {props.content}
      </a>
    </li>
  );
};
export default NavItem;
