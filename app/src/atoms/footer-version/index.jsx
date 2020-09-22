import React from "react";

const footerVersion = ({ versionNumber }) => {
  return (
    <div className="float-right d-none d-sm-inline-block">
      <b>Version</b>
      {versionNumber}
    </div>
  );
};

export default footerVersion;
