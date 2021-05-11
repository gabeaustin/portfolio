import React, { Component } from "react";

class MainInfo extends Component {
  render() {
    return (
      <>
        <div className="col-md-6 col-sm-12">
          <div className="container my-4" id="ownerNameContainer">
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
            <div className="d-grid gap-3 col-md-6 col-sm-12 mx-auto">
              <button
                type="button"
                class="btn btn-warning py-2 px-5 projectsButton"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href="/projects";
                }}
              >
                My Projects
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainInfo;
