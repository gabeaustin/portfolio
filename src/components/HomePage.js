import React from "react";
import "../App.css";

import MainInfo from "./MainInfo";
import MainImage from "./MainImage";

const HomePage = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <MainInfo />
      </div>
      <div className="col-md-6 col-sm-12" id="mainImageContainer">
        <MainImage />
      </div>
    </div>
  );
};

export default HomePage;
