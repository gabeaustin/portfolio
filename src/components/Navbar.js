import React from "react";
import { Link } from "react-router-dom";

import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import ComingSoon from "../components/ComingSoon";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="nav justify-content-center">
          <Link className="navbar-brand" to="/">
            myBoyGabe
          </Link>

          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="nav-item">
            <Link to="/comingsoon">Projects</Link>
          </li>

          {/* uncomment /projects once projects page is completed  */}
          {/* <Link to="/projects">Projects</Link> */}

          <li className="nav-item">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
