import React from "react";
import "./message.scss";
const Message = props => (
  <div id="message" className={props.class}>
    {props.content}
  </div>
);
export default Message;
