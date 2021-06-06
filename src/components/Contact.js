import React from "react";
import "../ComingSoon.css";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Contact = () => {
  return (
    <>
      <div className="comingSoonContainer">
        <div className="container col-md-12">
          <div className="mainPageDiv">
            <i className="fas fa-github"></i>
            <i className="fab fa-github"></i>
            {/* <span className="orange">import</span>{" "}
          <span className="yellow">&#123;</span>
          <span className="white">ComingSoon</span>
          <span className="yellow">&#125;</span>{" "}
          <span className="orange">from</span>{" "}
          <span className="green">"gabeAustin"</span>
          <span className="grey">;</span> */}
          </div>
        </div>

        <div>
          <span>&#58; &#58; &#123;</span>
          <span className="green">"yourNextDeveloper"</span>
          <span className="white">&#58; &#123;</span>
          <span className="green">"name"</span>
          <span className="white">&#58; &#123;</span> "Gabriel Austin",
          <span className="green">"email"</span>
          <span className="white">&#58; &#123;</span> "gabriel.austin2019@gmail.com",
          <span className="green">"github"</span>
          <span className="white">&#58; &#123;</span> "www.github.com/gabeaustin",
          <span className="green">"linkedin"</span>
          <span className="white">&#58; &#123;</span> "www.linkedin.com/in/gabrielaustin",
          <span className="green">"skills"</span>
          {/* <span className="white">:  [</span><span className="green">"JavaScript"</span>, "CSS", "Bootstrap", "MySQL", "Version Control (Git)", "Ruby", "Agile Web Development", "React", "Scrum", "Project Management", "Teaching", "Training", "Mentoring" */}
          ] &#125;
        </div>

        <div className="d-grid col-md-6 col-sm-12 mx-auto text-center mt-5">
          <Link to="/">
            <Button color="warning" className="is-rounded">
              <span className="home-button">Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
