import Header from "./components/Header";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TvShows from "./pages/TvShows";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NowPlaying" element={<NowPlaying />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/TvShows" element={<TvShows />} />
      </Routes>
    </>
  );
}

export default App;
