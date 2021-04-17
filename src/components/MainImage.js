import React, { Component } from "react";
import faker from "faker";

class MainImage extends Component {
  render() {
    let randomAvatar = faker.image.avatar();
    return (
      <>
        <div>
          <img
            src={randomAvatar}
            alt="Photo of Gabriel Austin"
            className="rounded-circle"
          />
        </div>

        <div className="mb-3" id="ownerDesc">
          <div>
            Web Developer at{" "}
            <span className="jobTitle">
              <span className="specialText">&#65371;</span> yourCompanyName{" "}
              <span className="specialText">&#65373;</span>
            </span>
          </div>
          <hr className="mainPageMiddleHr" />
          <div>
            HTML | CSS | JavaScript | Ruby | Version Control (Git) | Agile Web
            Development | Scrum | Project Management | Training/Teaching
          </div>
        </div>
      </>
    );
  }
}

export default MainImage;
