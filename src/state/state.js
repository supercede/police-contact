import React from "react";
import Phone from "../phone/phone";

const State = prop => {
  return (
    <div>
      <h2>{prop.state}</h2>
      <Phone phones={prop.phones} />
    </div>
  );
};

export default State;
