import React from "react";
import MovieItem from "../MovieItem";
import { MovieListWrapper, MovieListHeading, MovieListGrid } from "./styled";



const MovieList = ({ movies }) => {
  return (
    <MovieListWrapper>
      <MovieListHeading>Popular movies</MovieListHeading>
      <MovieListGrid>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            image={movie.image}
            title={movie.title}
            year={movie.year}
            genres={movie.genres}
            rating={movie.rating}
            votes={movie.votes}
          />
        ))}
      </MovieListGrid>
    </MovieListWrapper>
  );
};

export default MovieList;
