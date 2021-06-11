import React from "react";

import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { FaFile, FaHandPointRight, FaHandPointLeft } from "react-icons/fa";

import resume from "../pdfs/resume.pdf";
import PDF from "../pdfs/resume.pdf";

const Resume = () => {
  return (
    <div className="container mt-3 pt-3">
      <div className="row">
        <div className="mb-4 h1 resume-heading row justify-content-center">
          Resume
        </div>

        <div className="h3 row justify-content-center d-none d-lg-block">
          Click to Download
        </div>

        <div className="row justify-content-center border mb-4 d-none d-lg-block">
          <div className="h1 justify-content-center col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <FaHandPointRight className="svg-hand-point col-xs-4 col-sm-4 col-md-4 col-lg-4" />
            <a href={resume} target="_blank">
              <FaFile
                className="mainPageFooterIcons mx-4"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Click to Download"
              />
            </a>
            <FaHandPointLeft className="svg-hand-point col-xs-4 col-sm-4 col-md-4 col-lg-4" />
          </div>
        </div>
      </div>

      <div className="container-fluid d-none d-lg-block mb-5 pb-5 resume-viewer-container">
        <Viewer fileUrl={PDF} />
      </div>
    </div>
  );
};

export default Resume;
