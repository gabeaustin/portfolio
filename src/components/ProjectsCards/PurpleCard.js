import React from "react";
import "../../App.css";
import { Button } from "reactstrap";

import cardComponentDesktopImg from "../../images/card-component-desktop-view.jpeg";

const PurpleCard = () => {
  return (
    <div className="card mb-5">
      <img
        src={cardComponentDesktopImg}
        alt="Countdown Timer Website"
        className="card-img-top mx-auto pt-5 border"
      />
      <div className="card-body">
        <h5 className="card-title text-center">Countdown Timer</h5>
        <p className="card-text pb-5">
          This is a countdown timer that I created using React and Bootstrap.
          You can see the seconds tick down to special date.
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
  );
};

export default PurpleCard;
