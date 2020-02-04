import React from "react";
import "./forminput.scss";
import { useSelector } from "react-redux";
const FormInput = props => {
  const isDarkMode = useSelector(state => state.isDarkMode);
  return (
    <div className={isDarkMode ? "inputWrap dark" : "inputWrap"}>
      <input
        form={props.form}
        className={isDarkMode ? "formInput dark" : "formInput"}
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
        className={isDarkMode ? "inputLabel dark" : "inputLabel"}
      >
        <span className="labelContent">{props.labelContent}</span>
      </label>
    </div>
  );
};
export default FormInput;
