<<<<<<< HEAD
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import MovieItem from '../../features/movies/MovieItem';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <MovieItem
          image="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"
          title="Mulan"
          year="2020"
          genres={["Action", "Adventure", "Drama"]}
          rating="7.1"
          votes="5000"
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
=======
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
>>>>>>> main

