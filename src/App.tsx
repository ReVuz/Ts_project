import Header from "./components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Popular from "./pages/Popular";
import TvShows from "./pages/TvShows";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/TvShows" element={<TvShows />} />
      </Routes>
    </>
  );
}

export default App;
