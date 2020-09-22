import React from "react";
import navItemIcon from "../../atoms/nav-item-icon";
import navItemText from "../../atoms/nav-item-text";

const mainnav = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <navItemIcon href="#" iconClass="fas fa-bars" />
        <navItemText href="#" text="Home" />
        <navItemText href="#" text="Contact" />
      </ul>
    </nav>
  );
};
export default mainnav;
