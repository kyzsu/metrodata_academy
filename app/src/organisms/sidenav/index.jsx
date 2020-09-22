import React from "react";
import SidenavItem from "../../atoms/sidenav-item";
import SidenavItemTreeview from "../../atoms/sidenav-item-treeview";
import BrandLogo from "../../atoms/brand-logo";

const sidenav = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <BrandLogo
        href="../../../public/logo.svg"
        src="#"
        alt="logo"
        brand="Admin Panel"
      />
      <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
        <div className="os-resize-observer-host observed">
          <div className="os-resize-observer"></div>
        </div>
        <div className="os-size-auto-observer observed">
          <div className="os-resize-observer"></div>
        </div>
        <div className="os-content-glue"></div>
        <div className="os-padding">
          <div className="os-viewport os-viewport-native-scrollbars-invisible">
            <div className="os-content">
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <SidenavItemTreeview href="#" text="Planets" />
                  <SidenavItem href="#" text="Jupiter" />
                  <SidenavItem href="#" text="Saturn" />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default sidenav;
