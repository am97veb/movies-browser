import React from "react";
import MovieItem from "../MovieItem";
import { MovieListWrapper, MovieListHeading, MovieListGrid } from "./styled";
import useGenres from "./Hooks/useGenres";
import usePopularMovies from "./Hooks/usePopularMovies";

const MovieList = () => {
  const genresMap = useGenres();
  const movies = usePopularMovies(genresMap);

  return (
    <MovieListWrapper>
      <MovieListHeading>Popular movies</MovieListHeading>
      <MovieListGrid>
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </MovieListGrid>
    </MovieListWrapper>
  );
};

export default MovieList;
