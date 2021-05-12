import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../src/App.css";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />

      <Footer />
    </BrowserRouter>
  );
};

export default App;
