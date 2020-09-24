import React from "react";
import { Dropdown } from "react-bootstrap";
import NavItemText from "../../atoms/nav-item-text";

const Mainnav = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <h3>
          <NavItemText href="#" text="Star Wars API" />
        </h3>
      </ul>
      <ul className="navbar-nav ml-auto">
        <Dropdown>
          <Dropdown.Toggle variant="transparant" id="dropdown-basic">
            <img
              src="https://image.flaticon.com/icons/png/512/126/126472.png"
              alt="setting"
              width="25px"
              height="25px"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Reset Password</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </nav>
  );
};
export default Mainnav;
