import React, { useState, useEffect } from "react";
import Gas from "./Gas";
import GasConsumption from "./GasConsumption";
import GasConsumptionGravity from "./GasConsumptionGravity";
import TotalGas from "./TotalGas";
import TVGas from "./TVGas";

const FiveSecondsLoop = () => {
  const [componentIndex, setComponentIndex] = useState(0);
  const components = [
    <Gas />,
    <GasConsumption />,
    <TotalGas />,
    <GasConsumptionGravity />,
    <TVGas />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setComponentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 15000); // Change to 5000 milliseconds (5 seconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{components[componentIndex]}</div>;
};

export default FiveSecondsLoop;
