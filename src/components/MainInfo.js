import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";
import faker from "faker";

class MainInfo extends Component {
  render() {
    let randomParagraph = faker.lorem.paragraph();
    let randomFirstName = faker.name.firstName();
    let randomLastName = faker.name.lastName();
    // const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />

    return (
      <>
        <div className="container mb-3">
          <div className="font-weight-bold mb-2 h1" id="ownerName">
            GABRIEL AUSTIN
            <hr className="mainPageMiddleHr" />
          </div>{" "}
          <br />
          <div className="font-weight-bold mb-2 h3" id="ownerNextLevel">
            NEXT LEVEL
          </div>{" "}
          <br />
          <div className="font-weight-bold mb-2 h3" id="ownerTitle">
            WEB DEVELOPER
          </div>{" "}
          <br />
          <div id="ownerDesc">{randomParagraph}</div>
        </div>

        <div>
          <button type="button" class="btn btn-warning">
            My Projects
          </button>
        </div>

        {/* social media below */}
        <div></div>
      </>
    );
  }
}

export default MainInfo;
