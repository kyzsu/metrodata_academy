import React from "react";
import Content from "../../organisms/content";
import Footer from "../../organisms/footer";
import Mainnav from "../../organisms/mainnav";
import Sidenav from "../../organisms/sidenav";
import "./style.css";

const AdminPanel = () => {
  return (
    <body className="sidebar-mini layout-fixed">
      <div className="wrapper">
        <Mainnav />
        <Sidenav />
        <Content />
        <Footer />
      </div>
    </body>
  );
};

export default AdminPanel;
