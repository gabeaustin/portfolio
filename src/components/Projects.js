import React from "react";
import "../App.css";
import { Button } from "reactstrap";

import justMyLuckImg from "../images/just-my-luck-screenshot.jpg";
import countdownTimer from "../images/countdown-timer-screenshot.jpg";

const Projects = () => {
  return (
    <div className="container">
      <h1 className="title is-1">This is the Projects Page</h1>
      <h3>PROJECTS PROJECTS PROJECTS</h3>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <img
              src={justMyLuckImg}
              alt="Just My Luck Website"
              className="card-img-top mx-auto"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Just My Luck</h5>
              {/* <h6 className="card-subtitle mb-2 text-muted"></h6> */}
              <p className="card-text">
                This is an interactive slot machine. The user has to get three
                2’s to win. I created this project to get a better understanding
                of component state.
              </p>

              <div className="project-link-btns-container text-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                  {/* <button type="button" class="btn btn-primary"> */}
                  <Button color="outline-warning" className="is-rounded">
                    Website
                  </Button>
                  <Button color="outline-warning" className="is-rounded">
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row">
        <div className="d-flex justify-content-center mb-5 border">
          <div className="col-md-6 mx-5">
            <img
              src={justMyLuckImg}
              className="rounded  img-responsive"
              alt="Just My Luck Game Web Page"
            />
          </div>
          <div className="col-md-6">
            <img
              src={countdownTimer}
              className="rounded  img-responsive"
              alt="Countdown Timer Web Page"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
