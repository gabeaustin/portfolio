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
            My current career path: IT -> Banking -> Education -> IT <br />
            My <span className="specialText">future</span> career path: Web
            Developer -> Scrum Master -> Project Manager
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
