import React from "react";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { FaEnvelope, FaGithub, FaLinkedin, FaFile } from "react-icons/fa";

import resume from "../pdfs/resume.pdf";

const Contact = () => {
  return (
    <div className="container mt-3 pt-3">
      <div className="h1 mb-3 contact-heading row justify-content-center">
        Contact Me
      </div>

      <span className="h1 mb-5 row justify-content-center">
        Socials / Resume / Email
      </span>

      <div className="d-flex justify-content-center">
        <a href="https://github.com/gabeaustin" target="_blank">
          <FaGithub className="mainPageFooterIcons contact-icons mx-4" />
        </a>
        <a href="https://www.linkedin.com/in/gabrielaustin/" target="_blank">
          <FaLinkedin className="mainPageFooterIcons contact-icons mx-4" />
        </a>

        <a href={resume} target="_blank">
          <FaFile
            className="mainPageFooterIcons contact-icons mx-4"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Click to Download"
          />
        </a>
        <a href="mailto:gabriel.austin2019@gmail.com">
          <FaEnvelope className="mainPageFooterIcons contact-icons mx-4" />
        </a>
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
