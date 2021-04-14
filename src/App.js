import "./App.css";
import NavBar from "../src/components/NavBar";
import MainInfo from "../src/components/MainInfo";
import faker from "faker";

function App() {
  let randomName = faker.name.findName();
  return (
    <div className="App">
      <NavBar />

      <h1>Gabe's Portfolio</h1>

      <MainInfo />
    </div>
  );
}

export default App;
