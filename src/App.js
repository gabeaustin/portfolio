import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import superHeroMe from "./images/superhero-me.PNG";
import cartoonMePeace from "./images/cartoon-me-peace.PNG";

import AboutTest from "./components/pages/AboutTest";
import Projects from "./components/pages/Projects";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainInfo from "./components/MainInfo";
import MainImage from "./components/MainImage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route
          exact
          path="/"
          render={(props) => (
            <div>
              <p>
                Vivamus nec nibh quam. Suspendisse potenti. Aenean porttitor
                quis enim a sagittis. Donec at cursus nisl, ac sollicitudin
                mauris. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. In commodo, ante id
                euismod lacinia, libero ipsum efficitur lectus, eu fringilla sem
                elit et tellus. Mauris tincidunt malesuada justo ac laoreet.
                Pellentesque euismod suscipit mauris. Fusce lobortis suscipit
                bibendum. Phasellus porta iaculis mi, vel suscipit enim faucibus
                ut. Sed tristique tincidunt elementum. Donec consequat est
                viverra orci fermentum, vel pharetra nisl scelerisque.
              </p>
            </div>
          )}
        />

        <Route path="/abouttest" component={AboutTest} />
        <Route path="/projects" component={Projects} />

        <div className="row">
          <MainInfo />
          <MainImage />
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
