import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="sticky-top">
        <ul class="nav justify-content-end navbar-right">
          <li class="nav-item">
            <a class="nav-link NavBar-homeBtn" aria-current="page" id="navbarLink" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link NavBar-aboutBtn" id="navbarLink" href="#">
              About
            </a>
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
