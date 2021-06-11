import React from "react";

import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import PDF from "../pdfs/resume.pdf";

const Resume = () => {
  return (
    <div className="container">
      <h1 className="mb-3 contact-heading row justify-content-center"></h1>
      <h1 className="mb-4">Resume</h1>
      <div className="container-fluid d-none d-lg-block mb-5 pb-5 resume-viewer-container">
        <Viewer fileUrl={PDF} />
      </div>
    </div>
  );
};

export default Resume;
