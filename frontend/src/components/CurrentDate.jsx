import React from "react";

const CurrentDate = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentDate = new Date().toLocaleDateString("id-ID", options);
  return <div>{currentDate}</div>;
};

export default CurrentDate;
