import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleTheme } from "../store/themeSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);
  const toggleModeHandler = () => {
    dispatch(toggleTheme());
  };
  return (
    <nav className="navbar navbar-dark bg-dark mb-2">
      <div className="container-fluid">
        <Link to={"/"}>
          <h2 style={{ color: "white" }}>Quiz App</h2>
        </Link>
        <div className="d-flex">
          <button className="btn btn-primary" onClick={toggleModeHandler}>
            {" "}
            {darkMode ? "Light " : "Dark "}Mode{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
