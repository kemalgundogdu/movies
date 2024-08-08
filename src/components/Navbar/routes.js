import React from "react";
import { Routes, Route } from "react-router-dom";
import Movie from "../Movie";
import WithGenres from "../Movie/withgenres";
import Shows from "../Shows";
import Detail from "../Movie/detail";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Movie />} />
      <Route path="/movies" element={<Movie />} />
      <Route path="/tvshows" element={<Shows />} />
      <Route path="/genre/:id" element={<WithGenres />} />
      <Route path="/movie/:id" element={<Detail />} />
    </Routes>
  );
}

export default CustomRoutes;
