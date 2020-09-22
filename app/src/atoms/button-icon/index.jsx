import React from "react";

const buttonIcon = ({ icon }) => {
  return (
    <button className="btn btn-navbar" type="submit">
      <i className={icon}></i>
    </button>
  );
};

export default buttonIcon;
