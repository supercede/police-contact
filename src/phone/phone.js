import React from "react";
import "./phone.css";

const Phone = ({ phones }) => {
  return (
    <div className="phone-container">
      {phones.map((phone, i) => (
        <div key={i}>
          <a href={`tel:+234${phone.substring(1)}`} className="phone">
            <i className="fas fa-phone-square-alt"></i>
            {phone}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Phone;
