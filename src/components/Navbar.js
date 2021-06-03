import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* uncomment /projects once projects page is completed  */}
        {/* <Link to="/projects">Projects</Link> */}
        <Link to="/comingsoon">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/">Home</Link>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
