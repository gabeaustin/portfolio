import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch,
  //   Redirect,
  //   Link,
  //   useRouteMatch,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

import NavBar from "./components/NavBar";
import MainInfo from "./components/MainInfo";
import MainImage from "./components/MainImage";
import JobInfoJson from "./components/JobInfoJson";
import faker from "faker";

function App() {
  let randomName = faker.name.findName();
  return (
    <>
      <div className="homepage-section">
        <div className="img-overlay">
          <div className="App container">

            <div className="row mt-5">
              <div className="col-md-6 col-sm-6">
                <MainInfo />
              </div>

              <div className="col-md-6 col-sm-6">
                <MainImage />
              </div>
            </div>
            
            <BrowserRouter>
              <NavBar />

              <Switch>
                <Route path="/about">
                  <About />
                </Route>

                <Route path="/contact">
                  <Contact />
                </Route>

                <Route path="/resume">
                  <Resume />
                </Route>

                <Route path="/">
                  <Home />
                </Route>
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
