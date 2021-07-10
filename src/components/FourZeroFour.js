import React from "react";
import { useLocation } from "react-router-dom";

const FourZeroFour = () => {
  const { pathname } = useLocation();
  return (
    <div className="container">
      <p className="display-4 text-center pt-5">
        <div>
          Sorry, <code className="text-white">{pathname}</code> doesn't exist.
        </div>
        <div>Please check the URL or go back a page.</div>
        <hr />
        <div className="text-warning">404 Error. Page Not Found.</div>
      </p>
    </div>
  );
};

export default FourZeroFour;
