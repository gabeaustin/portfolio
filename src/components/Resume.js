import React from "react";

import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { FaFile, FaHandPointRight, FaHandPointLeft } from "react-icons/fa";

import resume from "../pdfs/resume.pdf";
import PDF from "../pdfs/resume.pdf";

const Resume = () => {
  return (
    <div className="container mt-3 pt-3">
      {/* <div className="d-flex px-3"> */}
      <div className="row">
        <div className="mb-4 h1 resume-heading row justify-content-center">
          Resume
        </div>
        {/* </div> */}

        <div className="mb-4 h1 row justify-content-center">
          Click to Download
        </div>

        <div className="mb-4 h1 row justify-content-center border">
          <FaHandPointRight className="svg-hand-point" />
          <a href={resume} target="_blank">
            <FaFile
              className="mainPageFooterIcons contact-icons mx-4"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Click to Download"
            />
          </a>
          <FaHandPointLeft className="svg-hand-point" />
        </div>
      </div>

      <div className="container-fluid d-none d-lg-block mb-5 pb-5 resume-viewer-container">
        <Viewer fileUrl={PDF} />
      </div>
    </div>
  );
};

export default Resume;
