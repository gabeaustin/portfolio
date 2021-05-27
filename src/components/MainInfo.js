import React from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";

// import Projects from "../components/pages/Projects";

const MainInfo = () => {
  return (
    <>
      <div className="col-md-6 col-sm-12">
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
          <div className="d-grid gap-3 col-md-6 col-sm-12 mx-auto">
            {/* uncomment /projects once projects page is completed  */}
            {/* <Link exact to="/projects"> */}
            <Link exact to="/comingsoon">
              <Button color="warning" className="is-rounded">
                <span>My Projects</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainInfo;
