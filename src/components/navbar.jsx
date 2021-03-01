import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__title" to="/home">
        <h2>Home</h2>
      </Link>
      <Link className="navbar__title" to="/newPost">
        <h2>Create new post</h2>
      </Link>
    </div>
  );
};

export default Navbar;
