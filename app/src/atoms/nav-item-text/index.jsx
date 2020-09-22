import React from "react";

const navItemText = ({ href, text }) => {
  return (
    <li className="nav-item d-none d-sm-inline-block">
      <a href={href} className="nav-link">
        {text}
      </a>
    </li>
  );
};

export default navItemText;
