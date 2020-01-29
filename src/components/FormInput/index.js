import React from "react";
import "./forminput.scss";
const FormInput = props => (
  <div className="inputWrap">
    <input
      form={props.form}
      className="formInput"
      id={props.id}
      type={props.type}
      name={props.name}
      autoComplete="off"
      value={props.value}
      onChange={props.onChange}
      required={true}
    />
    <label htmlFor={props.htmlFor} className="inputLabel">
      <span className="labelContent">{props.labelContent}</span>
    </label>
  </div>
);
export default FormInput;
