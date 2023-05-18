import React from "react";

// import {} from 'react-chartjs-2'

const LayoutTV = ({ children }) => {
  return (
    <React.Fragment>
      <div className="column has-background-light">
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default LayoutTV;
