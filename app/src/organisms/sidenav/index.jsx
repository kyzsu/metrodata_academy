import React from "react";
import sidenavItem from "../../atoms/sidenav-item";
import sidenavItemTreeview from "../../atoms/sidenav-item-treeview";
import brandLogo from "../../atoms/brand-logo";

const sidenav = () => {
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <brandLogo href="#" src="#" alt="logo" brand="Admin Panel" />
    <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
      <div className="os-resize-observer-host observed">
        <div
          className="os-resize-observer"
          style="left: 0px; right: auto;"
        ></div>
      </div>
      <div
        className="os-size-auto-observer observed"
        style="height: calc(100% + 1px); float: left;"
      >
        <div className="os-resize-observer"></div>
      </div>
      <div
        className="os-content-glue"
        style="margin: 0px -8px; width: 249px; height: 949px;"
      ></div>
      <div className="os-padding">
        <div
          className="os-viewport os-viewport-native-scrollbars-invisible"
          style="overflow-y: scroll;"
        >
          <div
            className="os-content"
            style="padding: 0px 8px; height: 100%; width: 100%;"
          >
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <sidenavItemTreeview href="#" text="Planets" />
                <sidenavItem href="#" text="Jupiter" />
                <sidenavItem href="#" text="Saturn" />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </aside>;
};

export default sidenav;
