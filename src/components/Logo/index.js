import React from "react";
import { Link } from "react-router-dom";
import "./logo.scss";
const Logo = props => (
  <Link to="/">
    <h1 id="logo" className={props.position}>
      DTJ
    </h1>
  </Link>
);
export default Logo;
