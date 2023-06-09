import Home from "./pages/Home.jsx";
import Inspect from "inspx";
import Playground from "./pages/Playground";
import Navigation from "./assets/Navigation/Navigation";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <Inspect>
        <div className="viewer">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Playground" element={<Playground />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </Inspect>
    </div>
  );
}

export default App;
