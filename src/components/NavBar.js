import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="sticky-top">
        <ul class="nav justify-content-end navbar-right h5">
          <li class="nav-item">
            <a class="nav-link NavBar-homeBtn" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link NavBar-aboutBtn" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link NavBar-resumeBtn" href="#">
              Resume
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link NavBar-contactBtn" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
