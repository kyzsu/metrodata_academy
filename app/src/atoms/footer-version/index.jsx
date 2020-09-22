import React from "react";
import "./style.css";

const footerVersion = ({ versionNumber }) => {
  return (
    <div className="float-right d-none d-sm-inline-block">
      <b>Version</b>
      {versionNumber}
    </div>
  );
};

export default footerVersion;
