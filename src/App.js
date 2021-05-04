import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import superHeroMe from "./images/superhero-me.PNG";
import cartoonMePeace from "./images/cartoon-me-peace.PNG";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <>
      {/* start Navbar */}
        {/* <Navbar /> */}
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={["fas", "code"]} />
        <FontAwesomeIcon icon={["fal", "code"]} />
      {/* end Navbar */}

        {/* start mainInfo section  */}
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="container mb-3 mx-5">
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
              <div className="mb-3 homePageText ownerBioDesc">
                <p>
                  I am an I.T. Professional with the{" "}
                  <span className="specialText">superpower</span> to communicate
                  technical information to non-technical audiences.
                </p>
              </div>
              {/* move this section to about or resume section */}
              <div className="d-grid gap-3 col-md-6 col-sm-12 mx-auto">
                <button
                  type="button"
                  class="btn btn-warning py-2 px-5 projectsButton"
                >
                  My Projects
                </button>
              </div>
            </div>
            {/* end mainInfo section  */}
          </div>

          <div className="col-md-6 col-sm-12">
            {/* start mainImage section  */}
            <div className="margin-auto text-center">
              <img
                src={superHeroMe}
                alt="Gabriel Austin"
                className="rounded-circle w-50"
              />
            </div>

            <div className="mb-3 text-center homePageText ownerDesc">
              <div>
                Meet Gabe Austin
                <br />
                Future Web Developer &#64; <br />
                <span className="jobTitle">
                  <span className="specialText">&#65371;</span> yourCompanyName{" "}
                  <span className="specialText">&#65373;</span>
                </span>
              </div>

              {/* <hr className="mainPageMiddleHr" />
          <div>
            HTML <span className="specialText">|</span> CSS{" "}
            <span className="specialText">|</span> JavaScript{" "}
            <span className="specialText">|</span> Ruby{" "}
            <span className="specialText">|</span> Version Control (Git){" "}
            <span className="specialText">|</span> Agile Web Development{" "}
            <span className="specialText">|</span> Scrum{" "}
            <span className="specialText">|</span> Project Management{" "}
            <span className="specialText">|</span> Training/Teaching
          </div> */}
            </div>
            {/* end mainImage section */}
          </div>
        </div>
        {/* end the row on line 75 */}
      </>
    );
  }
}

export default App;
