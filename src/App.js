import "./App.css";
import NavBar from "../src/components/NavBar";
import MainInfo from "../src/components/MainInfo";
import MainImage from "../src/components/MainImage";
import JobInfoJson from "./components/JobInfoJson";
import faker from "faker";

function App() {
  let randomName = faker.name.findName();
  return (
    <div className="img-overlay">
      <div className="App container">
        <NavBar />

        <div className="mb-5">
          <h1>Gabe's Portfolio</h1>
        </div>

        <div className="row mt-5">
          <div className="col-md-3 ">
            <MainInfo />
          </div>

          <div className="col-md-2 "></div>
          <div className="col-md-3 ">
            <MainImage />
          </div>

          <div className="col-md-4 ">
            <JobInfoJson />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
