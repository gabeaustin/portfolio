import "./App.css";
import NavBar from "../src/components/NavBar";
import MainInfo from "../src/components/MainInfo";
import MainImage from "../src/components/MainImage";
import faker from "faker";

function App() {
  let randomName = faker.name.findName();
  return (
    <div className="App">
      <NavBar />

      <h1>Gabe's Portfolio</h1>

      <MainInfo />
      <MainImage />
    </div>
  );
}

export default App;
