import React from "react";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

import { FaFile, FaHandPointRight, FaHandPointLeft } from "react-icons/fa";

import resume from "../pdfs/resume.pdf";
import PDF from "../pdfs/resume.pdf";

const Resume = () => {
  return (
    <>
      <div className="container mt-3 pt-3 no-show-on-mobile">
        <div className="row">
          <div className="mb-4 h1 resume-heading row justify-content-center">
            Resume
          </div>

          <div className="h3 row justify-content-center">Click to Download</div>

          <div className="row justify-content-center mb-4">
            <div className="h1 justify-content-center col-md-4 col-lg-4">
              <FaHandPointRight className="svg-hand-point col-md-4 col-lg-4" />
              <a href={resume} target="_blank">
                <FaFile
                  className="mainPageFooterIcons mx-4"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Click to Download"
                />
              </a>
              <FaHandPointLeft className="svg-hand-point col-md-4 col-lg-4" />
            </div>
          </div>
        </div>

        <div className="container-fluid d-none d-lg-block mb-5 resume-viewer-container">
          <Viewer fileUrl={PDF} />
        </div>

        <div className="d-grid col-md-6 col-sm-12 mx-auto text-center">
          <Link to="/">
            <Button color="warning" className="is-rounded mb-5">
              <span className="home-button">Home</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="container p-3 mb-5 no-show-on-computer">
        <div className="row">
          <div className="mb-3 h1 resume-heading row justify-content-center">
            Resume
          </div>

          <div className="mb-3 h1 row justify-content-center">
            Gabriel Austin
            <hr className="resume-heading-hr w-50 justify-content-center" />
          </div>
          <div>
            <div className="fs-2 resume-heading">Summary</div>
            <p className="fs-4">
              Experienced Web Developer with the ability to manage client
              relationships, control budgets, and design web applications.
            </p>

            <div className="fs-2 resume-heading">Skills</div>
            <p className="fs-4">
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>MySQL</li>
                <li>Version Control (Git)</li>
                <li>Agile Web Development</li>
                <li>Scrum</li>
                <li>Project Management</li>
                <li>Teaching</li>
                <li>Training</li>
              </ul>
            </p>

            <div className="fs-2 resume-heading">Work History</div>
            <p className="fs-4 mb-5">
              07/2019 - 06/2020 <br />
              Computer Science Teacher <br />
              Uncommon Schools <br />
              Brooklyn, NY <br />
              <ul>
                <li>Developed curriculum for the school year</li>
                <li>Taught students how to write and debug code</li>
                <li>Designed coding challenges to measure progress</li>
                <li>Improved instruction based on data collected</li>
              </ul>
            </p>

            <p className="fs-4 mb-5">
              06/2017 - 06/2019 <br />
              Office Manager <br />
              Uncommon Schools <br />
              Brooklyn, NY <br />
              <ul>
                <li>Managed office budget and financial databases</li>
                <li>Built positive relationships with parents and vendors</li>
              </ul>
            </p>

            <p className="fs-4 mb-5">
              09/2015 - 06/2016 <br />
              Web Developer <br />
              AgSmarts <br />
              Memphis, TN <br />
              <ul>
                <li>Ensured projects were delivered on time</li>
                <li>Developed wireframes and created mockups for clients</li>
                <li>Maintained website using Ruby, JavaScript, and jQuery</li>
              </ul>
            </p>

            <p className="fs-4 mb-5">
              03/2014 - 09/2015 <br />
              Jr. Web Developer <br />
              ProctorU <br />
              Birmingham, AL <br />
              <ul>
                <li>
                  Maintained and improved features for a scheduling system using
                  Ruby, HTML, CSS, Bootstrap, and JavaScript
                </li>
                <li>Added features and fixed bugs based on Trello board</li>
                <li>Participated in the implementation design processes</li>
                <li>Liaison between development team, staff, and clients</li>
              </ul>
            </p>

            <div className="fs-2 resume-heading">Education</div>

            <p className="fs-4 mb-5">
              Certificate Program <br />
              Full Stack Web Development Bootcamp <br />
              Innovate Birmingham
            </p>

            <p className="fs-4 mb-5">
              Master of Science (M.S.) <br />
              Management Information Systems (MIS) <br />
              University of Alabama at Birmingham
            </p>

            <p className="fs-4 mb-5">
              Bachelor of Science (B.S.) <br />
              Computer Information Systems (CIS) <br />
              Alabama State University
            </p>
          </div>
        </div>

        <div className="d-grid col-md-6 col-sm-12 mx-auto text-center">
          <Link to="/">
            <Button color="warning" className="is-rounded mb-5">
              <span className="home-button">Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Resume;
