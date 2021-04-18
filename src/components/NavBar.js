import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  //   Redirect,
  //   Link,
  //   useRouteMatch,
} from "react-router-dom";
// import { Router, Route, Link } from "react-router";
// import { Link } from "react-router-dom";
// import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

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
            {/* <a href={About} class="nav-link NavBar-aboutBtn" id="navbarLink"> */}
            <a class="nav-link NavBar-resumeBtn" id="navbarLink" href="#">
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
