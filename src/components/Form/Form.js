import React from "react";
import "./form.scss";
const Form = () => {
  return (
    <div>
      <div id="formWrap">
        <form autoComplete="off" name="formName" action="#" method="get">
          <h2 id="formTitle">Sample Form</h2>
          <br />
          <div className="inputWrap">
            <input
              className="formInput"
              type="text"
              name="name"
              autoComplete="off"
              required={true}
            />
            <label className="inputLabel">
              <span className="labelContent">Name</span>
            </label>
          </div>
          <div className="inputWrap">
            <input
              className="formInput"
              type="text/email"
              name="email"
              autoComplete="off"
              required={true}
            />
            <label className="inputLabel">
              <span className="labelContent">Email</span>
            </label>
          </div>
          <div className="inputWrap">
            <input
              className="formInput"
              type="password"
              name="password"
              autoComplete="new-password"
              required={true}
            />
            <label className="inputLabel">
              <span className="labelContent">Password</span>
            </label>
          </div>
          <input
            type="submit"
            form="formName"
            value="Sign Up"
            id="formSubmit"
          />
        </form>
      </div>
    </div>
  );
};
export default Form;
