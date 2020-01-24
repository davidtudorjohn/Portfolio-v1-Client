import React, { useState } from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhone,
  faEnvelopeSquare
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div id="header">
        <h1 id="logo">DTJ</h1>
        <nav>
          <ul id="navList">
            <li className="navItem">
              <a href="https://github.com/david-t-john">
                <FontAwesomeIcon id="faGithub" icon={faGithub} />
              </a>
            </li>
            <li className="navItem">
              <a href="https://linkedin.com/in/david-t-john">
                <FontAwesomeIcon id="faLinkedin" icon={faLinkedin} />
              </a>
            </li>
            <li className="navItem">
              <a href="mailto:davidjohn_atl@yahoo.com">
                <FontAwesomeIcon
                  id="faEnvelopeSquare"
                  icon={faEnvelopeSquare}
                />{" "}
                Email me
              </a>
            </li>
            <li className="navItem">
              <a href="tel:+1-678-699-4962">
                <FontAwesomeIcon id="faPhone" icon={faPhone} /> (678)-699-4962
              </a>
            </li>
          </ul>
        </nav>
        <button
          id="mobileMenu"
          className={isOpen ? "rotate" : "unrotate"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div id="mobileMenuContent" className={isOpen ? "open" : "closed"}>
        <nav>
          <ul id="mobileList">
            <li className="mobileItem">
              <a href="https://github.com/david-t-john">
                <FontAwesomeIcon icon={faGithub} id="faGithub" /> Github
              </a>
            </li>
            <li className="mobileItem">
              <a href="https://linkedin.com/in/david-t-john">
                <FontAwesomeIcon icon={faLinkedin} id="faLinkedin" /> LinkedIn
              </a>
            </li>
            <li className="mobileItem">
              <a href="mailto:davidjohn_atl@yahoo.com">
                <FontAwesomeIcon
                  id="faEnvelopeSquare"
                  icon={faEnvelopeSquare}
                />{" "}
                Email me
              </a>
            </li>
            <li className="mobileItem">
              <a href="tel:+1-678-699-4962">
                <FontAwesomeIcon id="faPhone" icon={faPhone} /> (678)-699-4962
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
