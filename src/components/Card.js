import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, categoryDetails, quizScoreTitle }) => {
  return (
    <div className="card" style={{ width: "100%" }}>
      <img
        src={image}
        className="card-img-top"
        alt="img"
        style={{ height: "300px" }}
      />
      <div className="card-body">
        <p className="card-text text-center" style={{ color: "black" }}>
          {" "}
          Your Knowledge in {categoryDetails?.name ||
            "Random Categories"} is <strong> {quizScoreTitle} </strong>
        </p>
        <Link to="/" className="btn btn-primary w-100">
          Take Another Quiz
        </Link>
      </div>
    </div>
  );
};

export default Card;
