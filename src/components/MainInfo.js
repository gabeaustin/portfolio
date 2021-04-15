import React, { Component } from "react";
import faker from "faker";

class MainInfo extends Component {
  render() {
    let randomParagraph = faker.lorem.paragraph();
    let randomFirstName = faker.name.firstName();
    let randomLastName = faker.name.lastName();

    return (
      <>
        <div className="container mb-4">
          <div className="font-weight-bold mb-2">{randomFirstName}<span> {randomLastName}</span></div>
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
