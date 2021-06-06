import React from "react";
import superHeroMe from "../images/superhero-me.PNG";

const MainImage = () => {
  return (
    <>
      <div>
        <img
          src={superHeroMe}
          alt="Gabriel Austin"
          className="rounded-circle w-50 m-auto p-4"
        />
      </div>

      <div className="my-3 text-center homePageText ownerDesc">
        <div className="mb-5">
          Meet Gabe Austin
          <br />
          Future Web Developer &#64; <br />
          <span className="jobTitle">
            <span className="specialText">&#65371;</span> yourCompanyName{" "}
            <span className="specialText">&#65373;</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default MainImage;
