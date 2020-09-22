import React from "react";
import ContentHeader from "../../atoms/content-header";
const content = () => {
  return (
    <div className="content-wrapper" style="min-height: 893px;">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <ContentHeader title="Dashboard" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default content;
