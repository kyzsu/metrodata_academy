import React from "react";

const sidenavItem = ({ href, text }) => {
  return (
    <li className="nav-item">
      <a href={href} className="nav-link">
        <i className="nav-icon fas fa-th"></i>
        <p>{text}</p>
      </a>
    </li>
  );
};

export default sidenavItem;
