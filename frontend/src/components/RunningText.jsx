import React, { useEffect, useRef } from "react";
import "./css/RunningText.css"; // Import the CSS file with animation styles

const RunningText = () => {
  const runningTextRef = useRef(null);

  useEffect(() => {
    const runningTextElement = runningTextRef.current;

    const animationDuration = runningTextElement.scrollWidth / 50; // Adjust the scroll speed by changing the divisor
    runningTextElement.style.animationDuration = `${animationDuration}s`;
  }, []);

  return (
    <div className="running-text-container">
      <div
        className="running-text is-size-5 is-family-monospace"
        ref={runningTextRef}
      >
        REALTIME DATA MONITORING GAS LNG © BY PE DIGITALISASI
      </div>
    </div>
  );
};

export default RunningText;
