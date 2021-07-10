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
import FourZeroFour from "./components/FourZeroFour";

const App = () => {
  return (
    <BrowserRouter>
      {/* This is for PDF viewer  */}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"></Worker>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/resume">
            <Resume />
          </Route>

          <Route path="/comingsoon">
            <ComingSoon />
          </Route>

          <Route path="*">
            <FourZeroFour />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
