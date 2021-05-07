import "./App.css";
import React, { Component } from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";

import superHeroMe from "./images/superhero-me.PNG";
import cartoonMePeace from "./images/cartoon-me-peace.PNG";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainInfo from "./components/MainInfo";
import MainImage from "./components/MainImage";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
          <div className="row">
            <MainInfo />
            <MainImage />
          </div>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;
