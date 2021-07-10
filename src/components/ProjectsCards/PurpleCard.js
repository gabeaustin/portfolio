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
        className="card-img-top mx-auto mt-5 border mb-5"
      />
      <div className="card-body">
        <h5 className="card-title text-center">Stats Card Component</h5>
        <p className="card-text mb-4">
          This is a PSD design converted into an HTML/CSS template. This
          template is fully responsive and mobile-friendly.
        </p>

        <div className="project-link-btns-container text-center">
          <a
            href="https://www.myboygabe.com/projects/stats-preview-card/"
            target="_blank"
            rel="noreferrer"
          >
            <Button color="warning" className="mx-2">
              <span>Website</span>
            </Button>
          </a>

          <a
            href="https://github.com/gabeaustin/redo-stats-preview-card"
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
