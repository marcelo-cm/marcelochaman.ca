import Home from "./pages/Home.jsx";
import Inspect from "inspx";
import stylesheets from "./stylesheets/Home.css";
import Playground from "./pages/Playground";
import Navigation from "./assets/Navigation/Navigation";
import LockedIn from "./pages/projects/LockedIn.jsx";
import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery.jsx";

function App() {
  return (
    <div className="body">
      <Inspect>
        <div className="viewer">
          <Navigation />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Playground" element={<Playground />} />
            <Route path="/Playground/LockedIn" element={<LockedIn />} />
          </Routes>
        </div>
      </Inspect>
    </div>
  );
}

export default App;
