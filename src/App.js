import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../src/App.css";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import ComingSoon from "./components/pages/ComingSoon";

import MainInfo from "./components/MainInfo";
import MainImage from "./components/MainImage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          {/* <Route path="/projects" component={Projects} /> */}

          <Route path="/resume">
            <Resume />
          </Route>

          <Route path="/comingsoon">
            <ComingSoon />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
