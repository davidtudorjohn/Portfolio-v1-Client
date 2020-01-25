import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./form.scss";
const Form = () => {
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
  const handleSubmit = e => {
    e.preventDefault();
    alert(
      `Username: ${username}\nEmail: ${userEmail}\nPassword: ${userPassword}`
    );
  };
  return (
    <div id="formWrap">
      <form id="signUpForm" autoComplete="off" name="formName">
        <h2 id="formTitle">Sample Form</h2>
        <br />
        <div className="inputWrap">
          <input
            form="signUpForm"
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
            form="signUpForm"
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
            form="signUpForm"
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
          form="formName"
          value="Sign Up"
          id="formSubmit"
          onClick={handleSubmit}
        ></input>
        <button onClick={handlePasswordVis} id="showHidePassword">
          {isPasswordVisible ? (
            <FontAwesomeIcon icon={faEyeSlash} id="faEyeSlash" />
          ) : (
            <FontAwesomeIcon icon={faEye} id="faEye" />
          )}
        </button>
      </form>
    </div>
  );
};
export default Form;
