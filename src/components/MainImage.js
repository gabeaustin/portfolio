import React, { Component } from "react";
import superHeroMe from "../images/superhero-me.PNG";

class MainImage extends Component {
  render() {
    return (
      <>
        <div className="col-md-6 col-sm-12 my-4" id="mainImageContainer">
          <div className="margin-auto text-center">
            <img
              src={superHeroMe}
              alt="Gabriel Austin"
              className="rounded-circle w-50"
            />
          </div>

          <div className="mb-3 text-center homePageText ownerDesc">
            <div>
              Meet Gabe Austin
              <br />
              Future Web Developer &#64; <br />
              <span className="jobTitle">
                <span className="specialText">&#65371;</span> yourCompanyName{" "}
                <span className="specialText">&#65373;</span>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainImage;
