import React, { Component } from "react";
import cartoonMac from "../images/cartoon-me-macbook.PNG";

class MainImage extends Component {
  render() {
    return (
      <>
        <div>
          <img
            src={cartoonMac}
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
            HTML <span className="specialText">|</span> CSS{" "}
            <span className="specialText">|</span> JavaScript{" "}
            <span className="specialText">|</span> Ruby{" "}
            <span className="specialText">|</span> Version Control (Git){" "}
            <span className="specialText">|</span> Agile Web Development{" "}
            <span className="specialText">|</span> Scrum{" "}
            <span className="specialText">|</span> Project Management{" "}
            <span className="specialText">|</span> Training/Teaching
          </div>
        </div>
      </>
    );
  }
}

export default MainImage;
