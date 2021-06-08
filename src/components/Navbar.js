import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Navbar.css";

const Navbar = () => {
  return (
    // <div>
    //   <nav className="navbar navbar-inverse navbar-fixed-top">
    //     {/* <div className="logo-text">MyBoyGabe</div> */}
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <ul className="nav nav-links text-center">
    //       {/* <li className="nav-item">
    //         <Link to="/about">About</Link>
    //       </li> */}

    //       <li className="nav-item m-2">
    //         <Link to="/comingsoon">Projects</Link>
    //       </li>

    //       {/* uncomment /projects once projects page is completed  */}
    //       {/* <Link to="/projects">Projects</Link> */}
    //       <li className="nav-item m-2">
    //         <Link to="/contact">Contact</Link>
    //       </li>

    //       {/* <li className="nav-item">
    //         <Link to="/resume">Resume</Link>
    //       </li> */}
    //     </ul>
    //   </nav>
    // </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <span className="navbar-text">
            <button class="btn btn-outline-warning">Contact</button>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
