import React, { Component } from "react";
import faker from "faker";

class MainInfo extends Component {
  render() {
    let randomParagraph = faker.lorem.paragraph();
    let randomWords = faker.internet.userName();
    return (
      <>
        <div className="container mb-4">
          <div className="font-weight-bold mb-2">{randomWords}</div>
          <div>{randomParagraph}</div>
        </div>

        <div>
          <button type="button" class="btn btn-outline-warning">
            My Projects
          </button>
        </div>
      </>
    );
  }
}

export default MainInfo;
