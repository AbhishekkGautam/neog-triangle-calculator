import React from "react";

const InitialComponent = ({ isShow }) => {
  return (
    <div
      className="initial-comp-div"
      style={{
        display: `${isShow}`,
      }}
    >
      <p className="heading">Welcome to Triangle Junior</p>
      <p style={{ opacity: "0.5" }}>Select a tab to get started.</p>
    </div>
  );
};

export default InitialComponent;
