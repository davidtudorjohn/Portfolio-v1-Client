import React, { useState } from "react";
import Logo from "../Logo";
import Message from "../Message";
import NavItem from "../NavItem";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhone,
  faEnvelopeSquare
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const handleLogOut = () => {
    localStorage.removeItem("auth-token");
    dispatch(logout());
    handleLoggedOutMsg();
  };
  const [loggedOutMsg, setLoggedOutMsg] = useState(false);
  const handleLoggedOutMsg = () => {
    setLoggedOutMsg(true);
    setTimeout(() => setLoggedOutMsg(false), 3000);
  };

  return (
    <div>
      {loggedOutMsg ? <Message content="Log Out Successful" /> : ""}
      <div id="header">
        <Logo position="left" />
        <nav>
          <ul id="navList">
            <NavItem
              href="https://github.com/david-t-john"
              icon={faGithub}
              content=" Github"
              class="navItem"
            />
            <NavItem
              href="https://linkedin.com/in/david-t-john"
              icon={faLinkedin}
              content=" LinkedIn"
              class="navItem"
            />
            <NavItem
              href="mailto:davidjohn_atl@yahoo.com"
              icon={faEnvelopeSquare}
              content=" Email me"
              class="navItem"
            />
            <NavItem
              href="tel:+1-678-699-4962"
              icon={faPhone}
              content=" (678)-699-4962"
              class="navItem"
            />
            {isLoggedIn ? (
              <NavItem
                content="Log Out"
                action={handleLogOut}
                class="navItem"
              />
            ) : (
              ""
            )}
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
            <NavItem
              href="https://github.com/david-t-john"
              icon={faGithub}
              content=" Github"
              class="mobileItem"
            />
            <NavItem
              href="https://linkedin.com/in/david-t-john"
              icon={faLinkedin}
              content=" LinkedIn"
              class="mobileItem"
            />
            <NavItem
              href="mailto:davidjohn_atl@yahoo.com"
              icon={faEnvelopeSquare}
              content=" Email me"
              class="mobileItem"
            />
            <NavItem
              href="tel:+1-678-699-4962"
              icon={faPhone}
              content=" (678)-699-4962"
              class="mobileItem"
            />
            {isLoggedIn ? (
              <NavItem
                content="Log Out"
                action={handleLogOut}
                class="mobileItem"
              />
            ) : (
              ""
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
