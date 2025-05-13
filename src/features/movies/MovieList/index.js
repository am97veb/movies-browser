import React from "react";
import { useSelector } from "react-redux";
import { selectMovies, selectGenres } from "../moviesSlice";
import MovieItem from "../MovieItem";
import { Pagination } from "../../../common/Pagination";
import { MovieListWrapper, MovieListHeading, MovieListGrid } from "./styled";
import { onlyYear } from "../../../common/dateFormatter";
import { mapGenres } from "../../../common/mapGenres";

const MovieList = () => {
  const data = useSelector(selectMovies);
  const genresList = useSelector(selectGenres);
  const allMovies = data || [];

  return (
    <MovieListWrapper>
      <MovieListHeading>Popular Movies</MovieListHeading>
      <MovieListGrid>
        {allMovies.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            character={movie.character}
            year={onlyYear(movie.release_date)}
            genres={mapGenres(movie.genre_ids, genresList)}
            rating={movie.vote_average.toFixed(1)}
            votes={movie.vote_count}
          />
        ))}
      </MovieListGrid>
      <Pagination />
    </MovieListWrapper>
  );
};

export default MovieList;
