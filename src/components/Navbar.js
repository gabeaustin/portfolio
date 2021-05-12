import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/abouttest">About Test</Link> |
      <Link to="/projects">Projects</Link>
    </div>
  );
};

export default Navbar;
