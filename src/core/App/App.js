import { Navigation } from "../../common/Navigation";
import {  } from "react-router-dom";
import { HashRouter,Routes, Route, Navigate } from "react-router-dom";
import { MoviePage } from "../../features/movies/MoviePage";
import MovieList from "../../features/movies/MovieList";
import { movies } from "../../common/Navigation/Search/SearchResult/moviesData";
import { PersonPage } from "../../features/people/PersonPage";
import { People } from "../../features/people/People";

export default () => (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path="/movies" element={<MovieList movies={movies} />} />
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/people" element={<People />} />
      <Route path="/people/person/:id" element={<PersonPage />} />
      <Route path="/" element={<Navigate to="/movies" />}/>
      
    </Routes>
  </HashRouter>
);

