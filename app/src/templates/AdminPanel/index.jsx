import React from "react";
import Content from "../../organisms/content";
import Footer from "../../organisms/footer";
import Mainnav from "../../organisms/mainnav";
import Sidenav from "../../organisms/sidenav";

const AdminPanel = () => {
  return (
    <div className="wrapper">
      <Mainnav />
      <Content />
      <Sidenav />
      <Footer />
    </div>
  );
};

export default AdminPanel;
