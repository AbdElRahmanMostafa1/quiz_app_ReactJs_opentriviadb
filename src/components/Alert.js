import React from "react";
import { Link } from "react-router-dom";

const Alert = ({ title }) => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <div className="alert-danger p-2 text-center">
        <h4 className="">{title}</h4>
        <p>
          Go to <Link to={"/"}>quiz configurations</Link>
        </p>
      </div>
    </section>
  );
};

export default Alert;
