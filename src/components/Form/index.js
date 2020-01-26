import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./form.scss";
const Form = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleUsername = e => {
    setUsername(e.target.value);
  };
  const handleEmail = e => {
    setUserEmail(e.target.value);
  };
  const handlePassword = e => {
    setUserPassword(e.target.value);
  };
  const handlePasswordVis = e => {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleRegister = async e => {
    e.preventDefault();
    const user = {
      name: `${username}`,
      email: `${userEmail}`,
      password: `${userPassword}`
    };
    await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // alert(
    //   `Username: ${username}\nEmail: ${userEmail}\nPassword: ${userPassword}`
    // );
  };
  const handleLogin = e => {
    e.preventDefault();

    // alert(`Email: ${userEmail}\nPassword: ${userPassword}`);
  };
  const handleFormToggle = e => {
    setUsername("");
    setIsLogIn(!isLogIn);
  };
  return isLogIn ? (
    <div id="formWrap">
      <form id="logInForm" autoComplete="off" name="logInForm">
        <h2 id="formTitle">Log In</h2>
        <br />
        <div className="inputWrap">
          <input
            form="logInForm"
            className="formInput"
            id="emailInput"
            type="text/email"
            name="email"
            autoComplete="off"
            value={userEmail}
            onChange={handleEmail}
            required={true}
          />
          <label htmlFor="emailInput" className="inputLabel">
            <span className="labelContent">Email</span>
          </label>
        </div>
        <div className="inputWrap">
          <input
            form="logInForm"
            className="formInput"
            id="passwordInput"
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            autoComplete="new-password"
            value={userPassword}
            onChange={handlePassword}
            required={true}
          />
          <label htmlFor="passwordInput" className="inputLabel">
            <span className="labelContent">Password</span>
          </label>
        </div>

        <input
          type="submit"
          form="logInForm"
          value="Log In"
          id="formSubmit"
          onClick={handleLogin}
        ></input>
        <button onClick={handlePasswordVis} id="showHidePassword">
          {isPasswordVisible ? (
            <FontAwesomeIcon icon={faEyeSlash} id="faEyeSlash" />
          ) : (
            <FontAwesomeIcon icon={faEye} id="faEye" />
          )}
        </button>
        <br />
        <button id="loginOrRegister" onClick={handleFormToggle}>
          Or Register
        </button>
      </form>
    </div>
  ) : (
    <div id="formWrap">
      <form id="registerForm" autoComplete="off" name="registerForm">
        <h2 id="formTitle">Register</h2>
        <br />
        <div className="inputWrap">
          <input
            form="registerForm"
            id="nameInput"
            className="formInput"
            type="text"
            name="name"
            autoComplete="off"
            value={username}
            onChange={handleUsername}
            required={true}
          />
          <label htmlFor="nameInput" className="inputLabel">
            <span className="labelContent">Name</span>
          </label>
        </div>
        <div className="inputWrap">
          <input
            form="registerForm"
            className="formInput"
            id="emailInput"
            type="text/email"
            name="email"
            autoComplete="off"
            value={userEmail}
            onChange={handleEmail}
            required={true}
          />
          <label htmlFor="emailInput" className="inputLabel">
            <span className="labelContent">Email</span>
          </label>
        </div>
        <div className="inputWrap">
          <input
            form="registerForm"
            className="formInput"
            id="passwordInput"
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            autoComplete="new-password"
            value={userPassword}
            onChange={handlePassword}
            required={true}
          />
          <label htmlFor="passwordInput" className="inputLabel">
            <span className="labelContent">Password</span>
          </label>
        </div>

        <input
          type="submit"
          form="registerForm"
          value="Register"
          id="formSubmit"
          onClick={handleRegister}
        ></input>
        <button onClick={handlePasswordVis} id="showHidePassword">
          {isPasswordVisible ? (
            <FontAwesomeIcon icon={faEyeSlash} id="faEyeSlash" />
          ) : (
            <FontAwesomeIcon icon={faEye} id="faEye" />
          )}
        </button>
        <br />
        <button id="loginOrRegister" onClick={handleFormToggle}>
          Or Log In
        </button>
      </form>
    </div>
  );
};
export default Form;
