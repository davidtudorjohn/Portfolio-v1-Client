import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navitem.scss";
const NavItem = props => (
  <li className={props.class}>
    <a href={props.href} onClick={props.action}>
      {props.icon ? <FontAwesomeIcon id={props.icon} icon={props.icon} /> : ""}
      {props.content}
    </a>
  </li>
);
export default NavItem;
