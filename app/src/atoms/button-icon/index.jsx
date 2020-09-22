import React from "react";

const ButtonIcon = ({ icon, type = 'button', ...props }) => {
  return (
    <button className="btn btn-navbar" type={type} {...props}>
      <i className={icon}></i>
    </button>
  );
};

export default ButtonIcon;
