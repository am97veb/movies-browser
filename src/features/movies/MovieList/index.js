import React from "react";
import MovieItem from "../MovieItem";
import { MovieListWrapper, MovieListHeading, MovieListGrid } from "./styled";
import { Pagination } from "../../../common/Pagination";

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
            character={movie.character}
            year={movie.year}
            genres={movie.genres}
            rating={movie.rating}
            votes={movie.votes}
          />
        ))}
      </MovieListGrid>
      <Pagination/>
    </MovieListWrapper>
  );
};

export default MovieList;
