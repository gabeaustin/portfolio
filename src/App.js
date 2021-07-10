import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import HomePage from "./components/HomePage";
import ComingSoon from "./components/ComingSoon";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      {/* This is for PDF viewer  */}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"></Worker>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
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
