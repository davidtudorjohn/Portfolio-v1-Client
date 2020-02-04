import React from "react";
import "./footer.scss";
import Logo from "../Logo";
import { useSelector } from "react-redux";
const Footer = () => {
  const isDarkMode = useSelector(state => state.isDarkMode);
  return (
    <div id="footerWrap" className={isDarkMode ? "dark" : ""}>
      <Logo position="right" class={isDarkMode ? "dark" : ""} />
      <p id="footerText" className={isDarkMode ? "dark" : ""}>
        Made with <strong>love</strong> in Atlanta
      </p>
    </div>
  );
};
export default Footer;
