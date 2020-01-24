import React from "react";
import "./form.scss";
const Form = () => {
  return (
    <div id="formWrap">
      <form
        id="signUpForm"
        autoComplete="off"
        name="formName"
        action="#"
        method="post"
      >
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
            type="password"
            name="password"
            autoComplete="new-password"
            required={true}
          />
          <label htmlFor="passwordInput" className="inputLabel">
            <span className="labelContent">Password</span>
          </label>
        </div>
        <input type="submit" form="formName" value="Sign Up" id="formSubmit" />
      </form>
    </div>
  );
};
export default Form;
