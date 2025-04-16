import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { Navigation } from "../../common/Navigation";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { MoviePage } from "../../features/movies/MoviePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/movie" element={<MoviePage />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
