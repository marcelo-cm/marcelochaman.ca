import stylesheets from "./stylesheets/Home.css";
import Home from "./pages/Home.jsx";
import Inspect from "inspx";
import Playground from "./pages/Playground";
import Navigation from "./assets/Navigation/Navigation";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  let Component;

  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/Home":
      Component = Home;
      break;
    case "/Playground":
      Component = Playground;
      break;
    case "/About":
      Component = About;
      break;
  }

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
