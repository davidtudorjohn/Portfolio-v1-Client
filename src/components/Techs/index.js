import React from "react";
import Tech from "../Tech";
const Techs = props => (
  <div>
    {props.names.map(t => (
      <Tech name={t} />
    ))}
  </div>
);
export default Techs;
