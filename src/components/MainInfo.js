import React, { Component } from "react";
import faker from "faker";

class MainInfo extends Component {
  render() {
    let randomParagraph = faker.lorem.paragraph();
    return (
      <div className="container">
        <p>{randomParagraph}</p>
      </div>
    );
  }
}

export default MainInfo;
