import React from "react";
import "../../App.css";
import { Button } from "reactstrap";

import mdbTabletImg from "../../images/mdb-tablet-view.jpg";

const MDPProject = () => {
  return (
    <div className="card mb-5">
      <img
        src={mdbTabletImg}
        alt="PSD to HTML Conversion Website"
        className="card-img-top mx-auto mt-5 border w-75"
      />
      <div className="card-body">
        <h5 className="card-title text-center">MDB Project</h5>
        <p className="card-text mb-5">
          This is an HTML email template designed for email marketing campaigns.
        </p>

        <div className="project-link-btns-container text-center">
          <a
            href="http://www.myboygabe.com/projects/mdb-project"
            target="_blank"
            rel="noreferrer"
          >
            <Button color="warning" className="mx-2">
              <span>Website</span>
            </Button>
          </a>

          <a
            href="https://github.com/gabeaustin/MDB-project"
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

export default MDPProject;
