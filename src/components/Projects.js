import React from "react";
import "../App.css";
import { Button } from "reactstrap";

import justMyLuckImg from "../images/just-my-luck-screenshot.jpg";
import countdownTimer from "../images/countdown-timer-screenshot.jpg";
import archFirmImg from "../images/arch-firm-screenshot.jpg";

const Projects = () => {
  return (
    <div className="container mt-3 pt-3">
      <div className="h1 mb-4 contact-heading row justify-content-center">
        Recent Projects
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-itmes-stretch">
          <div className="card mb-5">
            <img
              src={justMyLuckImg}
              alt="Just My Luck Website"
              className="card-img-top mx-auto border"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Just My Luck</h5>
              <p className="card-text pb-5">
                This is an interactive slot machine. The user has to get three
                2’s to win. I created this project to get a better understanding
                of component state.
              </p>

              <div className="project-link-btns-container text-center">
                <a
                  href="http://myboygabe.com/projects/just_my_luck/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button color="warning" className="mx-2">
                    <span>Website</span>
                  </Button>
                </a>

                <a
                  href="https://github.com/gabeaustin/just-my-luck"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button color="warning" className="mx-2">
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-itmes-stretch">
          <div className="card mb-5">
            <img
              src={archFirmImg}
              alt="Architecture Firm Website"
              className="card-img-top mx-auto border"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Site Redesign</h5>
              <p className="card-text">
                This is an ongoing website redesign for an architecture firm.
                For this project, I used React and Bootstrap. I also used the
                Waterfall Project Management Methodology.
              </p>

              <div className="project-link-btns-container text-center">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="arch-firm-btn"
                >
                  <Button
                    color="warning disabled "
                    className="mx-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Coming Soon..."
                  >
                    <span>Website</span>
                  </Button>
                </a>

                <a
                  href="https://github.com/gabeaustin/stout-architecture"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button color="warning" className="mx-2">
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4 d-flex align-itmes-stretch mx-auto">
          <div className="card mb-5">
            <img
              src={countdownTimer}
              alt="Countdown Timer Website"
              className="card-img-top mx-auto pt-5 border"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Countdown Timer</h5>
              <p className="card-text pb-5">
                This is a countdown timer that I created using React and
                Bootstrap. You can see the seconds tick down to special date.
              </p>

              <div className="project-link-btns-container text-center">
                <a
                  href="http://www.myboygabe.com/projects/countdown-timer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button color="warning" className="mx-2">
                    <span>Website</span>
                  </Button>
                </a>

                <a
                  href="https://github.com/gabeaustin/countdown-timer"
                  target="_blank"
                  rel="noreferrer"
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
    </div>
  );
};

export default Projects;
