import React from "react";

const LoadingSpinner = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        width: "100%",
      }}
    >
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border "
          style={{ width: "5rem", height: "5rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </section>
  );
};

export default LoadingSpinner;
