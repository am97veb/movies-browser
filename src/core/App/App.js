import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { MoviePage } from "../../features/movies/MoviePage";
import { PopularPeople } from "../../features/people/PopularPeople";
import MovieList from "../../features/movies/MovieList";

export default function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/people" element={<PopularPeople />} />
      </Routes>
    </HashRouter>
  );
}
