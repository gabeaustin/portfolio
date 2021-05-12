import React from "react";
import "../../App.css";
import justMyLuckImg from "../../images/just-my-luck-screenshot.jpg";

const Projects = () => {
  return (
    <div>
      <h1 className="title is-1">This is the Projects Page</h1>
      <h3>PROJECTS PROJECTS PROJECTS</h3>

      <div className="row">
        <div className="flex flex-wrap items-center col-md-4">
          <img
            src={justMyLuckImg}
            className="rounded float-start thumbnail img-responsive justMyLuck"
            alt="Just My Luck Game Web Page"
          />
          <img src="..." className="rounded float-end" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Projects;
