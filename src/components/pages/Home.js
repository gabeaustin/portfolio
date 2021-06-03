import React from "react";
import "../../App.css";

import MainInfo from "../MainInfo";
import MainImage from "../MainImage";

const Home = () => {
  return (
    <div className="row">
      <MainInfo />
      <MainImage />
    </div>
  );
};

export default Home;
