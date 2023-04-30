import React from "react";
import backgroundImage from "../background.png";

const LayoutUtility = ({ children }) => {
  return (
    <React.Fragment>
      <div
        className="column has-background-light "
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default LayoutUtility;
