import React from 'react';
import Header from './components/Header.tsx';
import Home from "./pages/Home.tsx";
import Movies from "./pages/Movies.tsx";
import Popular from "./pages/Popular.tsx";
import TvShows from "./pages/TvShows.tsx";
import { Route, Routes } from "react-router-dom";
// import { Button } from './components/ui/button';
// import { DropdownMenu } from './components/ui/dropdown-menu';
// import { Toggle } from './components/ui/toggle';

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
