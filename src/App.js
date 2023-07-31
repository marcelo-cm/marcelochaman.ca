import Inspect from "inspx";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./pages/Home/Home.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Playground from "./pages/Playground/Playground.jsx";
import LockedIn from "./pages/Playground/LockedIn/LockedIn.jsx";
import Memoria from "./pages/Playground/Memoria/Memoria.jsx";

import mixpanel from "mixpanel-browser";

mixpanel.init("2b837b3806273e1cc3e621de8faee49e", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
  ignore_dnt: true,
});

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
            <Route path="/Playground/Memoria" element={<Memoria />} />
          </Routes>
        </div>
      </Inspect>
    </div>
  );
}

export default App;
