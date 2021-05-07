import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

import superHeroMe from "./images/superhero-me.PNG";
import cartoonMePeace from "./images/cartoon-me-peace.PNG";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainInfo from "./components/MainInfo";
import MainImage from "./components/MainImage";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="row">
          <MainInfo />
          <MainImage />
        </div>

        <Footer />
      </>
    );
  }
}

export default App;
