import React from "react";
import treeviewItem from "../sidenav-item-treeview-item";

const sidenavItemTreeview = ({ href, text, treeviewItemList }) => {
  return (
    <li className="nav-item has-treeview">
      <a href={href} className="nav-link">
        <i className="nav-icon fas fa-copy"></i>
        <p>
          {text}
          <i className="fas fa-angle-left right"></i>
        </p>
      </a>
      <ul className="nav nav-treeview">
        <treeviewItem href="#" text="plants" />
      </ul>
    </li>
  );
};

export default sidenavItemTreeview;
