import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div>
        {/* Resume Header  */}
        <h1>GABRIEL AUSTIN</h1>
        <h3>McCalla, AL 35111</h3>
        <h3>917-721-7722</h3>
        <h3>
          gabriel.austin2019@gmail.com | www.myboygabe.com |
          www.github.com/gabeaustin
        </h3>
        <h3>
          PROFESSIONAL SUMMARY <br />
          I.T. professional with the superpower to communicate technical
          information to non-technical audiences. Experienced Web Developer with
          the ability to manage client relationships, control budgets, and
          design web applications.
        </h3>
        <h2>Work History</h2>
        Uncommon Schools, Computer Science Teacher Brooklyn, NY 07/2019 -
        06/2020
        <ul>
          <li>Developed curriculum for the school year</li>
          <li>Taught students how to write and debug code</li>
          <li>Designed coding challenges to measure progress</li>
          <li>Adapted instruction based on data collected </li>
        </ul>
        Uncommon Schools, Office Manager Brooklyn, NY 06/2017 - 06/2019
        <ul>
          <li>Managed office budget and financial databases</li>
          <li>Dealt with queries and complaints from staff and vendors</li>
          <li>Organized school events and conferences</li>
        </ul>
        AgSmarts, Web Developer Memphis, TN 09/2015 - 06/2016
        <ul>
          <li>Introduced Project Management tool to track progress</li>
          <li>Developed wireframes and created mockups for clients</li>
          <li>Maintained website using Ruby, JavaScript, and jQuery</li>
        </ul>
        ProctorU, Jr. Web Developer Birmingham, AL 03/2014 - 09/2015
        <ul>
          <li>
            Acted as technical information resource to business representatives
          </li>
          <li>Liaison between development team, staff, and clients</li>
          <li>
            Developed applications using Ruby, HTML, CSS, Bootstrap, and
            JavaScript
          </li>
        </ul>
      </div>
    );
  }
}

export default Resume;
