import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../src/App.css";

import superHeroMe from "./images/superhero-me.PNG";
import cartoonMePeace from "./images/cartoon-me-peace.PNG";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainInfo from "./components/MainInfo";
import MainImage from "./components/MainImage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />

      {/* <div className="row">
          <MainInfo />
          <MainImage />
        </div> */}

      <Footer />
    </BrowserRouter>
  );
};

export default App;
