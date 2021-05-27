import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      {/* uncomment /projects once projects page is completed  */}
      {/* <Link to="/projects">Projects</Link> */}
      <Link to="/comingsoon">Projects</Link>
      <Link to="/resume">Resume</Link>
    </div>
  );
};

export default Navbar;
