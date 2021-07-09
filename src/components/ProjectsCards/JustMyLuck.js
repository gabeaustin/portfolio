import React from "react";
import "../../App.css";
import { Button } from "reactstrap";

import justMyLuckImg from "../../images/just-my-luck-screenshot.jpg";

const JustMyLuck = () => {
  return (
    <div className="card mb-5">
      <img
        src={justMyLuckImg}
        alt="Just My Luck Website"
        className="card-img-top mx-auto border"
      />
      <div className="card-body">
        <h5 className="card-title text-center">Just My Luck</h5>
        <p className="card-text pb-5">
          This is an interactive slot machine. The user has to get three 2’s to
          win. I created this project to get a better understanding of component
          state.
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
  );
};

export default JustMyLuck;
