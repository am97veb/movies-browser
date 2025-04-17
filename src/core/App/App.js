import { Navigation } from "../../common/Navigation";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { MoviePage } from "../../features/movies/MoviePage";
import { PopularPeople } from "../../features/people/PopularPeople";

export default () => (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path="/movie" element={<MoviePage />}>
      </Route>
      <Route path="/people" element={<PopularPeople />}>
      </Route>
    </Routes>
  </HashRouter>
);

