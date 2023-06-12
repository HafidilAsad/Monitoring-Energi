import React, { useEffect, useRef } from "react";

const GasListrik = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const urls = ["http://10.14.51.17:3000/gas", "http://10.14.51.17:8000"];
    let currentIndex = 0;

    const accessURLsInLoop = () => {
      iframeRef.current.src = urls[currentIndex];
      currentIndex = (currentIndex + 1) % urls.length;
    };

    accessURLsInLoop();
    const interval = setInterval(accessURLsInLoop, 10000); // 5 seconds in milliseconds

    // Clear interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <iframe
      ref={iframeRef}
      title="URL Viewer"
      className="is-fullwidth is-fullheight"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
};

export default GasListrik;
