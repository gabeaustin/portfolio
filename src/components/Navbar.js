import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand logo-text">
          myBoyGabe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item m-2">
              <Link to="/comingsoon" className="nav-link">
                Projects
              </Link>
            </li>

            <li className="nav-item m-2">
              <Link to="/resume" className="nav-link">
                Resume
              </Link>
            </li>
          </ul>

          <div className="d-none d-md-block">
            <button class="btn btn-outline-warning contact-cta-btn">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
