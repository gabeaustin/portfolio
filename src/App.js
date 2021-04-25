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
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src={cartoonMePeace}
                alt="Gabriel Austin"
                className="rounded-circle w-50"
                class="d-inline-block align-text-top"
                id="nav-bar-img"
              />
              Gabe Austin
            </a>
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
