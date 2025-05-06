import React from "react";
import MovieItem from "../../../../features/movies/MovieItem";  
import { MovieGrid } from "./styled";
import { movies } from "./moviesData";  

const SearchResult = () => {
  return (
    <MovieGrid>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          image={movie.image}
          title={movie.title}
          year={movie.year}
          genres={movie.genres}
          rating={movie.rating}
          votes={movie.votes}
        />
      ))}
    </MovieGrid>
  );
};

export default SearchResult;
