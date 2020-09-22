import React from "react";
import NavItemIcon from "../../atoms/nav-item-icon";
import NavItemText from "../../atoms/nav-item-text";

const Mainnav = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <NavItemIcon href="#" iconClass="fas fa-bars" />
        <NavItemText href="#" text="Home" />
        <NavItemText href="#" text="Contact" />
      </ul>
    </nav>
  );
};
export default Mainnav;
