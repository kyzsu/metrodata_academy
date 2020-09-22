import React from "react";
import footerStrong from "../../atoms/footer-strong";
import footerVersion from "../../atoms/footer-version";

const footer = () => {
  return (
    <footer className="main-footer">
      <footerStrong
        copyrightText="Copyright ©2020"
        brandLink="#"
        brandName="wwww.williamsirsal.com"
      />
      <footerVersion versionNumber="0.1.0" />
    </footer>
  );
};

export default footer;
