import React from "react";

const footerStrong = ({ copyrightText, brandLink, brandName }) => {
  return (
    <strong>
      {copyrightText}
      <a href={brandLink}>{brandName}</a>
    </strong>
  );
};

export default footerStrong;
