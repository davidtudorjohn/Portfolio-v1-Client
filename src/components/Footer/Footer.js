import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div>
      <div id="footerWrap">
        <h1 id="logoFooter" style={{ fontStyle: "italic", fontWeight: "700" }}>
          DTJ
        </h1>
        <p id="footerText">
          Made with <strong>love</strong> in Atlanta
        </p>
      </div>
    </div>
  );
};
export default Footer;
