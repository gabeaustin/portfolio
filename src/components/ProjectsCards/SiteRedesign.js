import React from "react";
import "../../App.css";
import { Button } from "reactstrap";

import archFirmImg from "../../images/arch-firm-screenshot.jpg";

const SiteRedesign = () => {
  return (
    <div className="card mb-5">
      <img
        src={archFirmImg}
        alt="Architecture Firm Website"
        className="card-img-top mx-auto mt-5 border"
      />
      <div className="card-body">
        <h5 className="card-title text-center">Site Redesign</h5>
        <p className="card-text">
          This is an ongoing website redesign for an architecture firm. For this
          project, I used React and Bootstrap. I also used the Waterfall Project
          Management Methodology.
        </p>

        <div className="project-link-btns-container text-center">
          <a
            href="#"
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
  );
};

export default SiteRedesign;
