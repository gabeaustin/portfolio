import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-center">
      <footer className="mainPageFooter p-3 mt-auto fixed-bottom">
        <a href="https://www.linkedin.com/in/gabrielaustin/" target="_blank">
          <FaLinkedin className="mainPageFooterIcons mx-4" />
        </a>
        <a href="https://github.com/gabeaustin" target="_blank">
          <FaGithub className="mainPageFooterIcons mx-4" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
