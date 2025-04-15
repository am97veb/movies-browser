import { Navigation } from "../../common/Navigation";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { MoviePage } from "../../features/movies/MoviePage";

export default () => (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path="/movie" element={<MoviePage />}>
      </Route>
    </Routes>
  </HashRouter>
);

