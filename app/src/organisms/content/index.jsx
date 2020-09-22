import React from "react";
import ContentHeader from "../../atoms/content-header";
const content = ({ title, children }) => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <ContentHeader title={title} />
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default content;
