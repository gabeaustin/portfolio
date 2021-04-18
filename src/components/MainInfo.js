import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

class MainInfo extends Component {
  render() {
    // const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />

    return (
      <>
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
      </>
    );
  }
}

export default MainInfo;
