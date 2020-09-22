import React from "react";
import FooterStrong from "../../atoms/footer-strong";
import FooterVersion from "../../atoms/footer-version";

const footer = () => {
  return (
    <footer className="main-footer">
      <FooterStrong
        copyrightText="Copyright ©2020"
        brandLink="#"
        brandName="wwww.williamsirsal.com"
      />
      <FooterVersion versionNumber="0.1.0" />
    </footer>
  );
};

export default footer;
