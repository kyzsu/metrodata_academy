import React from "react";

const brandLogo = ({ href, src, alt, brand }) => {
  return (
    <a href={href} className="brank-link">
      <img
        src={src}
        alt={alt}
        className="brand-image img-circle elevation-3"
        style="opacity: .8"
      />
      <span className="brand-text font-weight-light">{brand}</span>
    </a>
  );
};

export default brandLogo;
