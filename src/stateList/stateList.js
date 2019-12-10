import React from "react";
import State from "../state/state";
import "./stateList.css";

const StateList = ({ states }) => {
  return (
    <div className="state-container">
      {states.map(({ state, phones }, i) => (
        <div className="state" key={i}>
          <State
            state={state.charAt(0).toUpperCase() + state.substring(1)}
            phones={phones}
          />
        </div>
      ))}
    </div>
  );
};

export default StateList;
