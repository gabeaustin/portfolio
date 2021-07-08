import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const HomePage = lazy(() => import("./components/HomePage"));

// import HomePage from "./components/HomePage";
// import ComingSoon from "./components/ComingSoon";
// import Contact from "./components/Contact";
// import Projects from "./components/Projects";
// import Resume from "./components/Resume";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Page is Loading...</div>}>
        {/* This is for PDF viewer  */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"></Worker>
        {/* <Navbar /> */}
        <div className="App">
          <Switch>
            {/* <Route exact path="/">
            <HomePage />
          </Route> */}

            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Suspense>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
