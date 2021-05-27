import "../../App.css";
import "../../ComingSoon.css";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

function ComingSoon() {
  return (
    <div className="comingSoonContainer">
      <div className="container col-md-12">
        <div className="mainPageDiv">
          <i className="fas fa-github"></i>
          <i className="fab fa-github"></i>
          <span className="orange">import</span>{" "}
          <span className="yellow">&#123;</span>
          <span className="white">ComingSoon</span>
          <span className="yellow">&#125;</span>{" "}
          <span className="orange">from</span>{" "}
          <span className="green">"gabeAustin"</span>
          <span className="grey">;</span>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
