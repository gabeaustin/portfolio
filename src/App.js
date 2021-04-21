import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

// import NavBar from "./components/NavBar";
import MainInfo from "./components/MainInfo";
import MainImage from "./components/MainImage";
// import JobInfoJson from "./components/JobInfoJson";

function App() {
  return (
    <>
      <div className="homepage-section">
        <div className="img-overlay">
          <div className="App container">
            {/* <NavBar /> */}
            {/* put nav bar here once fully tested */}

            <div className="row mt-5">
              <div className="col-md-6 col-sm-6">
                <MainInfo /> 
                {/* Need to move from app cause it will show on all pages */}
              </div>

              <div className="col-md-6 col-sm-6">
                <MainImage /> 
                {/* Need to move from app cause it will show on all pages */}
              </div>
            </div>

            <BrowserRouter>
              {/* <NavBar /> */}

              <Switch>
                <Route path="/" exact={true}>
                  {/* <App /> */}
                  <Home />
                </Route>

                <Route path="/about">
                  <About />
                </Route>

                <Route path="/contact">
                  <Contact />
                </Route>

                <Route path="/resume">
                  <Resume />
                </Route>

                {/* <Route path="/">
                  <Home />
                </Route> */}
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>

      {/* put this on resume page */}
      {/* <div className="col-md-4 ">
            <JobInfoJson />
          </div> */}
      {/* </div>
          </div>
        </div>
      </div>  */}
    </>
  );
}

export default App;
