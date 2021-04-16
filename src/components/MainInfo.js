import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-solid-svg-icons';
import faker from "faker";

class MainInfo extends Component {
  render() {
    let randomParagraph = faker.lorem.paragraph();
    let randomFirstName = faker.name.firstName();
    let randomLastName = faker.name.lastName();
    // const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />

    return (
      <>
        <div className="container mb-4">
          <div className="font-weight-bold mb-2">{randomFirstName}<span> {randomLastName}</span></div>
          <div>{randomParagraph}</div>
        </div>

        <div>
          <button type="button" class="btn btn-info">
            My Projects
          </button>
        </div>


        <div>
        {/* {linkedInIcon} */}
        </div>
      </>
    );
  }
}

export default MainInfo;
