import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1 className="title is-1">This is the Contact Page</h1>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Duis consequat nulla ac ex consequat,
        in efficitur arcu congue. Nam fermentum commodo egestas.
      </p>

      <div>
        <BrowserRouter>
          <Route>
            <Switch>
              <h3>
                Return to <Link to="/">Home</Link>
              </h3>
            </Switch>
          </Route>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Contact;
