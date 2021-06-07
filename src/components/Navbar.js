import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="logo-text">MyBoyGabe</div>
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

        <ul className="nav justify-content-center nav-links">
          <Link className="navbar-brand" to="/">
            myBoyGabe
          </Link>

          {/* <li className="nav-item">
            <Link to="/about">About</Link>
          </li> */}

          <li className="nav-item">
            <Link to="/comingsoon">Projects</Link>
          </li>

          {/* uncomment /projects once projects page is completed  */}
          {/* <Link to="/projects">Projects</Link> */}
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>

          {/* <li className="nav-item">
            <Link to="/resume">Resume</Link>
          </li> */}
        </ul>
      </nav>

      <a href="#" className="call-to-action"><Button>Contact</Button></a>
    </div>
  );
};

export default Navbar;
