import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";
import Projects from "../components/pages/Projects";
import Resume from "../components/pages/Resume";
import ComingSoon from "../components/pages/ComingSoon";

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/comingsoon" component={ComingSoon} />

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* uncomment /projects once projects page is completed  */}
        {/* <Link to="/projects">Projects</Link> */}
        <Link to="/comingsoon">Projects</Link>
        <Link to="/resume">Resume</Link>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
