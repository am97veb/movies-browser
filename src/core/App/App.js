import { Navigation } from "../../common/Navigation";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { MoviePage } from "../../features/movies/MoviePage";
import { PersonPage } from "../../features/people/PersonPage";
import { People } from "../../features/people/People";
import { ScrollToTop } from "../../scrollToTop";
import { Movies } from "../../features/movies/Movies";
import { toMovieDetails, toMovies, toPeople, toPersonDetails } from "../routes";

export default () => (
  <HashRouter>
    <ScrollToTop />
    <Navigation />
    <Routes>
      <Route path={toMovies()} element={<Movies />} />
      <Route path={toMovieDetails(":id")} element={<MoviePage />} />
      <Route path={toPeople()} element={<People />} />
      <Route path={toPersonDetails(":id")} element={<PersonPage />} />
      <Route path="/" element={<Navigate to={toMovies()} />} />
    </Routes>
  </HashRouter>
);