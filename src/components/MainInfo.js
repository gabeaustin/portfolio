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
          <div id="ownerNextLevel">NEXT LEVEL</div> <br />
          <div id="ownerTitle">WEB DEVELOPER</div> <br />
          <div className="mb-3" id="ownerDesc">
            I.T. Professional with the Superpower to Communicate Technical
            Information to Non-Technical Audiences
          </div>
          <div className="d-grid gap-3 col-6 mx-auto">
            {/* displays on non-mobile */}
            <button
              type="button"
              class="btn btn-warning btn-lg py-2 px-5"
              id="btnNonMobile"
            >
              My Projects
            </button>
          </div>
        </div>

        {/* social media below */}
        <div></div>
      </>
    );
  }
}

export default MainInfo;
