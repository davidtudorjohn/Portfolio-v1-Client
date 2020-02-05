import React, { useState } from "react";
import Logo from "../Logo";
import Message from "../Message";
import NavItem from "../NavItem";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPhone,
  faEnvelopeSquare,
  faMoon,
  faSun
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Switch } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { logout, darkMode } from "../../actions";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.isDarkMode);
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
    <>
      {loggedOutMsg ? (
        <Message
          content="Log Out Successful"
          class={isDarkMode ? "dark" : ""}
        />
      ) : (
        ""
      )}
      <div id="header" className={isDarkMode ? "dark" : ""}>
        <Logo position="left" class={isDarkMode ? "dark" : ""} />
        <nav>
          <ul id="navList">
            <NavItem
              href="https://github.com/david-t-john"
              icon={faGithub}
              content=" Github"
              class={isDarkMode ? "navItem dark" : "navItem"}
            />
            <NavItem
              href="https://linkedin.com/in/david-t-john"
              icon={faLinkedin}
              content=" LinkedIn"
              class={isDarkMode ? "navItem dark" : "navItem"}
            />
            <NavItem
              href="mailto:davidjohn_atl@yahoo.com"
              icon={faEnvelopeSquare}
              content=" Email me"
              class={isDarkMode ? "navItem dark" : "navItem"}
            />
            <NavItem
              href="tel:+1-678-699-4962"
              icon={faPhone}
              content=" (678)-699-4962"
              class={isDarkMode ? "navItem dark" : "navItem"}
            />
            {/* <Switch id="darkModeSwitch" onChange={() => dispatch(darkMode())} /> */}
            <div
              id="darkModeToggle"
              className={isDarkMode ? "dark" : ""}
              onClick={() => dispatch(darkMode())}
            >
              {isDarkMode ? (
                <FontAwesomeIcon icon={faSun} id="faSun" />
              ) : (
                <FontAwesomeIcon icon={faMoon} id="faMoon" />
              )}
              {/* {isDarkMode ? " Light Mode" : " Dark Mode"} */}
            </div>
            {isLoggedIn ? (
              <NavItem
                content="Log Out"
                action={handleLogOut}
                class={isDarkMode ? "navItem dark" : "navItem"}
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
          <FontAwesomeIcon
            icon={faBars}
            id="faBars"
            className={isDarkMode ? "dark" : ""}
          />
        </button>
      </div>

      <div
        id="mobileMenuContent"
        className={`${isDarkMode ? "dark" : ""} ${isOpen ? "open" : "closed"}`}
      >
        <nav>
          <ul id="mobileList">
            <NavItem
              href="https://github.com/david-t-john"
              icon={faGithub}
              content=" Github"
              class={isDarkMode ? "mobileItem dark" : "mobileItem"}
            />
            <NavItem
              href="https://linkedin.com/in/david-t-john"
              icon={faLinkedin}
              content=" LinkedIn"
              class={isDarkMode ? "mobileItem dark" : "mobileItem"}
            />
            <NavItem
              href="mailto:davidjohn_atl@yahoo.com"
              icon={faEnvelopeSquare}
              content=" Email me"
              class={isDarkMode ? "mobileItem dark" : "mobileItem"}
            />
            <NavItem
              href="tel:+1-678-699-4962"
              icon={faPhone}
              content=" (678)-699-4962"
              class={isDarkMode ? "mobileItem dark" : "mobileItem"}
            />
            {isLoggedIn ? (
              <NavItem
                content="Log Out"
                action={handleLogOut}
                class={isDarkMode ? "mobileItem dark" : "mobileItem"}
              />
            ) : (
              ""
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;
