import React from "react";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { FaEnvelope, FaGithub, FaLinkedin, FaFile } from "react-icons/fa";

import resume from "../pdfs/resume.pdf";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="mb-4 contact-heading">Contact Me</h1>
      <div className="row">
        <div className="h1 mb-2 d-flex col-md-12">Socials</div>
        <div className="d-flex col-md-12">
          <a href="mailto:gabriel.austin2019@gmail.com">
            <FaEnvelope className="mainPageFooterIcons contact-icons mx-4" />
          </a>
          <a href="https://github.com/gabeaustin" target="_blank">
            <FaGithub className="mainPageFooterIcons contact-icons mx-4" />
          </a>
          <a href="https://www.linkedin.com/in/gabrielaustin/" target="_blank">
            <FaLinkedin className="mainPageFooterIcons contact-icons mx-4" />
          </a>
        </div>

        <div className="h1 mb-2">Resume</div>
        <div className="mb-4">
          <a href={resume} target="_blank">
            <FaFile
              className="mainPageFooterIcons contact-icons mx-4"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Click to Download"
            />
          </a>
        </div>
      </div>

      {/* <div className="col-md-4 fs-4 col-md-4 col-sm-12 col-xs-12">
        gabriel.austin2019@gmail.com
      </div> */}

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

export default Contact;
