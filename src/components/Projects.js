import React from "react";
import "../App.css";

import CountdownTimer from "./ProjectsCards/CountdownTimer";
import JustMyLuck from "./ProjectsCards/JustMyLuck";
import SiteRedesign from "./ProjectsCards/SiteRedesign";
import MDPProject from "./ProjectsCards/MDPProject";
import PurpleCard from "./ProjectsCards/PurpleCard";

const Projects = () => {
  return (
    <div className="container mt-3 pt-3">
      <div className="h1 mb-4 contact-heading row justify-content-center">
        Recent Projects
      </div>

      {/* first row */}
      <div className="row cards-container">
        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-itmes-stretch">
          {/* JUST MY LUCK  */}
          <JustMyLuck />
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-itmes-stretch">
          {/* ARCH FIRM / SITE REDESIGN  */}
          <SiteRedesign />
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-itmes-stretch mx-auto">
          {/* COUNTDOWN TIMER  */}
          <CountdownTimer />
        </div>
      </div>

      {/* second row */}
      <div className="row cards-container">
        <div className="col-lg-2 col-md-2 col-sm-2 d-flex align-items-start"></div>
        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-start justify-content-around">
          {/* CARD COMPONENT DESKTOP / PURPLE CARD  */}
          <PurpleCard />
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-items-start justify-content-around">
          {/* MDB PROJECT  */}
          <MDPProject />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 d-flex align-items-start"></div>
      </div>
    </div>
  );
};

export default Projects;
