import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../src/App.css";

import HomePage from "./components/HomePage";
import About from "./components/About";
import ComingSoon from "./components/ComingSoon";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      {/* Add Navbar back when I have all the links working */}
      {/* <Navbar /> */}
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/projects">
            <Projects />
          </Route>

          <Route exact path="/resume">
            <Resume />
          </Route>

          <Route exact path="/comingsoon">
            <ComingSoon />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
