import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import justMyLuckImg from "../images/just-my-luck-screenshot.jpg";
import countdownTimer from "../images/countdown-timer-screenshot.jpg";

const Projects = () => {
  return (
    <div className="container">
      <h1 className="title is-1">This is the Projects Page</h1>
      <h3>PROJECTS PROJECTS PROJECTS</h3>

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-itmes-stretch">
          <div className="card mb-5">
            <img
              src={justMyLuckImg}
              alt="Just My Luck Website"
              className="card-img-top mx-auto"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Just My Luck</h5>
              <p className="card-text">
                This is an interactive slot machine. The user has to get three
                2’s to win. I created this project to get a better understanding
                of component state.
              </p>

              <div className="project-link-btns-container text-center">
                <a
                  href="http://myboygabe.com/projects/just_my_luck/"
                  target="_blank"
                >
                  <Button color="warning" className="mx-2">
                    <span>Website</span>
                  </Button>
                </a>

                <a
                  href="https://github.com/gabeaustin/just-my-luck"
                  target="_blank"
                >
                  <Button color="warning" className="mx-2">
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-itmes-stretch mx-auto">
          <div className="card mb-5">
            <img
              src={countdownTimer}
              alt="Countdown Timer Website"
              className="card-img-top mx-auto pt-5"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Countdown Timer</h5>
              <p className="card-text">
                This is a countdown timer that I created using React and
                Bootstrap. You can see the seconds tick down to special date.
              </p>

              <div className="project-link-btns-container text-center">
                <a href="#" target="_blank">
                  <Button color="warning" className="mx-2">
                    <span>Website</span>
                  </Button>
                </a>

                <a
                  href="https://github.com/gabeaustin/countdown-timer"
                  target="_blank"
                >
                  <Button color="warning" className="mx-2">
                    GitHub
                  </Button>
                </a>
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
