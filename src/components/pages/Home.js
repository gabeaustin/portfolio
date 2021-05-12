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
      <Route exact path="/" render={(props) => <></>} />

      <Route path="/projects" component={Projects} />

      <div className="row">
        <MainInfo />
        <MainImage />
      </div>
    </BrowserRouter>
  );
};

export default Home;
