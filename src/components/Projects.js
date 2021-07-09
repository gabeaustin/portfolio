import React from "react";
import "../App.css";
import { Button } from "reactstrap";

import CountdownTimer from "./ProjectsCards/CountdownTimer";

{
  /* OLD COMPONENTS */
}

// import justMyLuckImg from "../images/just-my-luck-screenshot.jpg";
// import archFirmImg from "../images/arch-firm-screenshot.jpg";
// import cardComponentDesktopImg from "../images/card-component-desktop-view.jpeg";
// import mdbTabletImg from "../images/mdb-tablet-view.jpg";

{
  /* END OLD COMPONENTS */
}

const Projects = () => {
  return (
    <div className="container mt-3 pt-3">
      <div className="h1 mb-4 contact-heading row justify-content-center">
        Recent Projects
      </div>

      <div className="row cards-container">
        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-itmes-stretch">
          {/* JUST MY LUCK  */}
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-itmes-stretch">
          {/* ARCH FIRM  */}
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-itmes-stretch mx-auto">
          <CountdownTimer />
        </div>
      </div>

      {/* second row */}
      <div className="row cards-container">
        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center">
          {/* CARD COMPONENT DESKTOP  */}
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center mx-auto">
          {/* MDB PROJECT  */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
