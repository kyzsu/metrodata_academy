import React from "react";

const navItemIcon = ({ href, iconClass }) => {
  return (
    <li className="nav-item">
      <a href={href} className="nav-link">
        <i className={iconClass}></i>
      </a>
    </li>
  );
};

export default navItemIcon;
