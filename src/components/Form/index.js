import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticated } from "../../actions";
import Message from "../Message";
import PasswordVis from "../PasswordVis";
import FormInput from "../FormInput";
import "./form.scss";

const Form = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLogIn, setIsLogIn] = useState(true);
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loggedInMsg, setLoggedInMsg] = useState(false);
  const [logInFailMsg, setLogInFailMsg] = useState(false);
  const [registeredMsg, setRegisteredMsg] = useState(false);
  const [registerFailMsg, setRegisterFailMsg] = useState(false);
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
  const handleIsLoggedIn = () => {
    handleLoggedInMsg();
    dispatch(authenticated());
    // setIsLoggedIn(true);
  };
  const handleLoggedInMsg = e => {
    setLoggedInMsg(true);
    setTimeout(() => setLoggedInMsg(false), 3000);
  };
  const handleLogInFailMsg = e => {
    setLogInFailMsg(true);
    setTimeout(() => setLogInFailMsg(false), 3000);
  };
  const handleRegisteredMsg = e => {
    setRegisteredMsg(true);
    setTimeout(() => setRegisteredMsg(false), 3000);
  };
  const handleRegisterFailMsg = e => {
    setRegisterFailMsg(true);
    setTimeout(() => setRegisterFailMsg(false), 3000);
  };
  const handleFormToggle = e => {
    setUsername("");
    setIsLogIn(!isLogIn);
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
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setIsLogIn(true);
          handleRegisteredMsg();
        } else {
          handleRegisterFailMsg();
        }
      })
      .catch(err => console.log(err));
  };
  const handleLogin = async e => {
    e.preventDefault();
    const user = {
      email: `${userEmail}`,
      password: `${userPassword}`
    };
    await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(res => {
        console.log(res, res.headers);
        // let token = res.headers["auth-token"];
        if (res.status === 200) {
          handleIsLoggedIn();
          localStorage.setItem("auth-token", "token");
        } else {
          handleLogInFailMsg();
        }
      })
      .catch(err => console.log(err));
  };

  if (loggedInMsg) {
    return <Message content="Log in successful" />;
  }

  if (isLoggedIn) {
    return null;
  }

  return isLogIn ? (
    <div id="formWrap">
      {registeredMsg ? <Message content="Registration successful" /> : ""}
      {logInFailMsg ? <Message content="Invalid email or password" /> : ""}

      <form id="logInForm" autoComplete="off" name="logInForm">
        <h2 id="formTitle">Log In</h2>
        <br />
        <FormInput
          form="loginForm"
          id="emailInput"
          type="text/email"
          name="email"
          value={userEmail}
          onChange={handleEmail}
          labelContent="Email"
        />

        <FormInput
          form="loginForm"
          id="passwordInput"
          type={isPasswordVisible ? "text" : "password"}
          name="password"
          value={userPassword}
          onChange={handlePassword}
          labelContent="Password"
        />
        <input
          type="submit"
          form="logInForm"
          value="Log In"
          id="formSubmit"
          onClick={handleLogin}
        ></input>

        <PasswordVis
          action={handlePasswordVis}
          visibility={isPasswordVisible}
        />
        <br />
        <button id="loginOrRegister" onClick={handleFormToggle}>
          Or Register
        </button>
      </form>
    </div>
  ) : (
    <div id="formWrap">
      {registerFailMsg ? (
        <Message content="Registration was unsuccessful. Please try again." />
      ) : (
        ""
      )}
      <form id="registerForm" autoComplete="off" name="registerForm">
        <h2 id="formTitle">Register</h2>
        <br />
        <FormInput
          form="registerForm"
          id="nameInput"
          type="text"
          name="name"
          value={username}
          onChange={handleUsername}
          labelContent="Name"
        />
        <FormInput
          form="registerForm"
          id="emailInput"
          type="text/email"
          name="email"
          value={userEmail}
          onChange={handleEmail}
          labelContent="Email"
        />

        <FormInput
          form="registerForm"
          id="passwordInput"
          type={isPasswordVisible ? "text" : "password"}
          name="password"
          value={userPassword}
          onChange={handlePassword}
          labelContent="Password"
        />
        <input
          type="submit"
          form="registerForm"
          value="Register"
          id="formSubmit"
          onClick={handleRegister}
        ></input>

        <PasswordVis
          action={handlePasswordVis}
          visibility={isPasswordVisible}
        />
        <br />
        <button id="loginOrRegister" onClick={handleFormToggle}>
          Or Log In
        </button>
      </form>
    </div>
  );
};
export default Form;
