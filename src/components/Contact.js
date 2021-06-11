import React from "react";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { FaEnvelope, FaGithub, FaLinkedin, FaFile } from "react-icons/fa";

import resume from "../pdfs/resume.pdf";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="mb-3 contact-heading">Contact Me</h1>

      <div className="row">
        <div className="fs-4 mb-5">Email: gabriel.austin2019@gmail.com</div>
      </div>

      <div className="row">
        <div className="h1 mb-2 d-flex col-md-6 col-sm-6 col-xs-6">Socials</div>
        <div className="h1 mb-2 col-md-6 col-sm-6 col-xs-6">Resume</div>
        <div className="d-flex mb-5 col-md-6 col-sm-6 col-xs-6">
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

        <div className="mb-4 col-md-6 col-sm-6 col-xs-6">
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
