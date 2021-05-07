import React, { Component } from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import superHeroMe from "../images/superhero-me.PNG";
import cartoonMePeace from "../images/cartoon-me-peace.PNG";
import About from "../About";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-transparent shadow">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <li class="nav-item">
                <a class="nav-link px-4" href="#" id="nav-link-home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link px-4"
                  href="#"
                  id="nav-link-about"
                  path="/about"
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-4" href="#" id="nav-link-resume">
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-4" href="#" id="nav-link-projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-4" href="#" id="nav-link-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
