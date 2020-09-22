import React from "react";

const treeviewItem = ({ href, text }) => {
  return (
    <li className="nav-item">
      <a href={href} className="nav-link">
        <i className="far fa-circle nav-icon"></i>
        <p>{text}</p>
      </a>
    </li>
  );
};

export default treeviewItem;
