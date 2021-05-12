import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../App.css";

import superHeroMe from "../../images/superhero-me.PNG";
import cartoonMePeace from "../../images/cartoon-me-peace.PNG";

import Projects from "./Projects";

import Navbar from "../Navbar";
import Footer from "../Footer";
import MainInfo from "../MainInfo";
import MainImage from "../MainImage";

const Home = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route
        exact
        path="/"
        render={(props) => (
          <div>
            <p>
              Vivamus nec nibh quam. Suspendisse potenti. Aenean porttitor quis
              enim a sagittis. Donec at cursus nisl, ac sollicitudin mauris.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. In commodo, ante id euismod
              lacinia, libero ipsum efficitur lectus, eu fringilla sem elit et
              tellus. Mauris tincidunt malesuada justo ac laoreet. Pellentesque
              euismod suscipit mauris. Fusce lobortis suscipit bibendum.
              Phasellus porta iaculis mi, vel suscipit enim faucibus ut. Sed
              tristique tincidunt elementum. Donec consequat est viverra orci
              fermentum, vel pharetra nisl scelerisque.
            </p>
          </div>
        )}
      />

      <Route path="/projects" component={Projects} />

      <div className="row">
        <MainInfo />
        <MainImage />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Home;
