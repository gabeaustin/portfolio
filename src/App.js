import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ComingSoon from "./components/ComingSoon";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

{/* Lazy Loading for Site Optimization - lines below */}
const HomePage = lazy(() => import("./components/HomePage"));
const Resume = lazy(() => import("./components/Resume"));

const App = () => {
  return (
    <BrowserRouter>
      {/* This is for PDF viewer - line below  */}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"></Worker>
      <Navbar />
      <div className="App">
        <Suspense fallback={<div>Page is Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage}>
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/projects">
              <Projects />
            </Route>

            <Route exact path="/resume" component={Resume}>
            </Route>

            <Route exact path="/comingsoon">
              <ComingSoon />
            </Route>
          </Switch>
        </Suspense>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
