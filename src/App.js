import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  useRouteMatch,
} from "react-router-dom";
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
      <div className="wrapper">
        <h1>Gabriel A Austin</h1>
      </div>
      {/* <Router>
        <Link to="/">Home</Link>
        <Route path="/" component={Home} />
      </Router>
      <div className="homepage-section">
        <div className="img-overlay">
          <div className="App container">
            <NavBar />

            <div className="row mt-5">
              <div className="col-md-6 col-sm-6">
                <MainInfo />
              </div>

              {/* <div className="col-md-2 "></div> */}
      {/* <div className="col-md-6 col-sm-6">
                <MainImage />
              </div> */}

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
