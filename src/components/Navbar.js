import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mb-4" id="mainNav">
      <div className="container-fluid mx-1">
        <div className="logo-text-wrapper me-auto mb-2 mb-lg-0">
          <Link to="/" className="navbar-brand m-2" id="brand-logo">
            <span className="brand-logo-regular-caps">my</span>
            <span className="brand-logo-small-caps">BoyGabe</span>
          </Link>
        </div>
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
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 my-2"
            id="nav-link-items-all"
          >
            <li className="nav-item">
              <Link to="/comingsoon" className="nav-link mx-4 fs-4">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/resume" className="nav-link mx-4 fs-4">
                Resume
              </Link>
            </li>
          </ul>

          <div className="d-none d-md-block">
            <Link to="/contact">
              <Button color="outline-warning" className="is-rounded">
                <span>Contact</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
