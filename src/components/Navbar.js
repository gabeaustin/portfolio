import React, { Component } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import superHeroMe from "../images/superhero-me.PNG";
import cartoonMePeace from "../images/cartoon-me-peace.PNG";
import App from "../App";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
import Resume from "../Resume";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-transparent shadow">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Router>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
          </Router>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link px-4" id="nav-link-home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link px-4" id="nav-link-about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/resume"
                  className="nav-link px-4"
                  id="nav-link-resume"
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-link px-4"
                  id="nav-link-projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link px-4"
                  id="nav-link-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
