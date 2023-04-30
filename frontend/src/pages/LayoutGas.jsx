import React from "react";

const LayoutGas = ({ children }) => {
  return (
    <React.Fragment>
      <div className="columns " style={{ minHeight: "100vh" }}>
        <div className="column has-background-light ">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LayoutGas;
