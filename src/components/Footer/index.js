import React from "react";
import "./footer.scss";
import Logo from "../Logo";
const Footer = () => (
  <div id="footerWrap">
    <Logo position="right" />
    <p id="footerText">
      Made with <strong>love</strong> in Atlanta
    </p>
  </div>
);
export default Footer;
