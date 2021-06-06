import React from "react";
import "../ComingSoon.css";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const ComingSoon = () => {
  return (
    <div className="comingSoonContainer">
      <div className="container col-md-12">
        <div className="mainPageDiv">
          <i className="fas fa-github"></i>
          <i className="fab fa-github"></i>
          <span className="orange">import</span>{" "}
          <span className="yellow">&#123;</span>
          <span className="white">ComingSoon</span>
          <span className="yellow">&#125;</span>{" "}
          <span className="orange">from</span>{" "}
          <span className="green">"gabeAustin"</span>
          <span className="grey">;</span>
        </div>
      </div>

      <div className="d-grid col-md-6 col-sm-12 mx-auto text-center mt-5">
        <Link to="/">
          <Button color="warning" className="is-rounded">
            <span className="home-button">Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
