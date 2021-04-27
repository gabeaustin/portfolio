import React, { Component } from "react";
import superHeroMe from "../images/superhero-me.PNG";
import cartoonMePeace from "../images/cartoon-me-peace.PNG";


class Navbar extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-md navbar-dark sticky-top shadow">
            <nav
              class="navbar navbar-expand-lg navbar-brand bg-transparent mb-3 container-fluid flex-wrap flex-md-nowrap"
              id="main-navbar"
            >
              <div class=" transparent" id="nav-container">
                <img
                  src={cartoonMePeace}
                  alt="Gabriel Austin"
                  className="rounded-circle w-50"
                  class="d-inline-block align-text-top "
                  id="nav-bar-img"
                />
  
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
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="nav-link-home">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link nav-link-css"
                        href="#"
                        id="nav-link-about"
                      >
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link nav-link-css"
                        href="#"
                        id="nav-link-resume"
                      >
                        Resume
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link nav-link-css"
                        href="#"
                        id="nav-link-contact"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        )
    }
}

export default Navbar;