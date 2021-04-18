import React, { Component } from "react";
// import { Router, Route, Link } from "react-router";
import { Link } from "react-router-dom";
import About from "../components/About";

class NavBar extends Component {
  render() {
    return (
      <div className="sticky-top" id="overlay">
        <ul class="nav justify-content-end navbar-right">
          <li class="nav-item">
            <a
              class="nav-link NavBar-homeBtn"
              aria-current="page"
              id="navbarLink"
              href="#"
            >
              Home
            </a>
          </li>
          <li class="nav-item">
            {/* <a href={About} class="nav-link NavBar-aboutBtn" id="navbarLink">
              About
            </a> */}
            <Link to="About">About</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link NavBar-resumeBtn" id="navbarLink" href="#">
              Resume
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link NavBar-contactBtn" id="navbarLink" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
