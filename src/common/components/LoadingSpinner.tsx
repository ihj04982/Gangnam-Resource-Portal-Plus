import React from "react";
import { PulseLoader } from "react-spinners";

const LoadingSpinner: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        color: "#444",
      }}
    >
      <PulseLoader color="#666666" size={10} />
      <p style={{ marginTop: "12px", fontSize: "14px" }}>데이터를 불러오고 있습니다...</p>
    </div>
  );
};

export default LoadingSpinner;