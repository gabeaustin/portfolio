import "./App.css";
import React, { Component } from "react";
import superHeroMe from "./images/superhero-me.PNG";
import cartoonMePeace from "./images/cartoon-me-peace.PNG";
import cartoonMeMacbook from "./images/cartoon-me-macbook.PNG";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        {/* put the navBar here  */}
        <nav
          class="navbar navbar-expand-lg navbar-brand bg-transparent"
          id="main-navbar"
        >
          <div class="container-fluid transparent" id="nav-container">
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
                  <a class="nav-link nav-link-css" href="#" id="nav-link-about">
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

        {/* end the navBar  */}

        {/* start mainInfo section  */}
        <div className="container mb-3">
          <div className="mb-2" id="ownerName">
            GABRIEL AUSTIN
            <hr className="mainPageMiddleHr" />
          </div>{" "}
          <br />
          <div id="ownerNextLevel">
            <span className="specialText">NEXT LEVEL</span>
          </div>{" "}
          <br />
          <div id="ownerTitle">WEB DEVELOPER</div> <br />
          <div className="mb-3" id="ownerDesc">
            <p>
              I am an I.T. Professional with the{" "}
              <span className="specialText">superpower</span> to communicate
              technical information to non-technical audiences.
            </p>
            {/* move this section to about or resume section */}
            {/* <span className="specialText">Current</span> career path: <br />
            <hr className="careerPathHr" />
            IT - Banking - Education - IT <br />
            <span className="specialText">Future</span> career path: <br />
            <hr className="careerPathHr" />
            Web Developer - Scrum Master - Project Manager */}
          </div>
          {/* move this section to about or resume section */}
          <div className="d-grid gap-3 col-md-6 mx-auto">
            <button type="button" class="btn btn-warning py-2 px-5">
              My Projects
            </button>
          </div>
        </div>
        {/* end mainInfo section  */}
      </>
    );
  }
}

export default App;
