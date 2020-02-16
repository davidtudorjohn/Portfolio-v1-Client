import React from "react";
import "./forminput.scss";
import { useSelector } from "react-redux";
const FormInput = props => {
  const isDarkMode = useSelector(state => state.isDarkMode);
  return (
    <div className={`inputWrap ${isDarkMode && "dark"}`}>
      <input
        form={props.form}
        className={`formInput ${isDarkMode && "dark"}`}
        id={props.id}
        type={props.type}
        name={props.name}
        autoComplete="off"
        value={props.value}
        onChange={props.onChange}
        required={true}
      />
      <label
        htmlFor={props.htmlFor}
        className={`inputLabel ${isDarkMode && "dark"}`}
      >
        <span className="labelContent">{props.labelContent}</span>
      </label>
    </div>
  );
};
export default FormInput;
