import { Navigation } from "../../common/Navigation";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { MoviePage } from "../../features/movies/MoviePage";
import { PersonPage } from "../../features/people/PersonPage";
import { People } from "../../features/people/People";
import { ScrollToTop } from "../../scrollToTop";
import { Movies } from "../../features/movies/Movies";

export default () => (
  <HashRouter>
    <ScrollToTop />
    <Navigation />
    <Routes>
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/movie/:id" element={<MoviePage />} />
      <Route path="/people" element={<People />} />
      <Route path="/people/person/:id" element={<PersonPage />} />
      <Route path="/" element={<Navigate to="/movies" />} />

    </Routes>
  </HashRouter>
);

