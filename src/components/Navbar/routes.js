import React from "react";
import { Routes, Route } from "react-router-dom";
import Movie from "../Movie";
import WithGenres from "../Movie/withgenres";
import Detail from "../Movie/detail";
import People from "../People";
import PeopleDetail from "../People/detail";
import Search from "../Search";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Movie />} />
      <Route path="/movies" element={<Movie />} />
      <Route path="/people" element={<People />} />
      <Route path="/search" element={<Search />} />
      <Route path="/genre/:id" element={<WithGenres />} />
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/people/:id" element={<PeopleDetail />} />
    </Routes>
  );
}

export default CustomRoutes;
