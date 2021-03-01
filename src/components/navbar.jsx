import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home">
        <h2>Home</h2>
      </Link>
      <Link to="/newPost">
        <h2>Create new post</h2>
      </Link>
    </div>
  );
};

export default Navbar;
