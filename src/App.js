import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home.jsx";
import Inspect from "inspx";

function App() {
  return (
    <div className="App">
      <Inspect>
        <Home />
      </Inspect>
    </div>
  );
}

export default App;
