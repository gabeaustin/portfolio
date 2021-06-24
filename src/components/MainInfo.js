import React from "react";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const MainInfo = () => {
  return (
    <div>
      <div className="container my-4" id="ownerNameContainer">
        <div className="mb-2" id="ownerName">
          GABRIEL AUSTIN
          <hr className="mainPageMiddleHr" />
        </div>{" "}
        <br />
        <div id="ownerNextLevel">
          <span className="specialText">NEXT LEVEL</span>
        </div>{" "}
        <br />
        <div id="ownerTitle">WEB DEVELOPER</div> <br />
        <div className="mb-3 homePageText ownerBioDesc">
          <p>
            I am an I.T. Professional with the{" "}
            <span className="specialText">superpower</span> to communicate
            technical information to non-technical audiences.
          </p>
        </div>
        <div className="d-grid col-md-6 col-sm-12 mx-auto text-center my-5">
          <Link to="/projects">
            <Button color="warning" className="is-rounded mx-auto">
              <span>Projects</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
