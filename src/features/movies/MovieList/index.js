import React from "react";
import { useSelector } from "react-redux";
import { selectMovies, selectGenres } from "../moviesSlice";
import MovieItem from "../MovieItem";
import { Pagination } from "../../../common/Pagination";
import { MovieListWrapper, MovieListHeading, MovieListGrid } from "./styled";
import { onlyYear } from "../../../common/dateFormatter";

const MovieList = () => {
  const data = useSelector(selectMovies);
  const genresList = useSelector(selectGenres);

  const allMovies = data || [];

  const mapGenres = (genre_ids) => {
    return genre_ids.map((id) => {
      const genre = genresList.find((g) => g.id === id);
      return genre ? genre.name : "Unknown";
    });
  };

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
            genres={mapGenres(movie.genre_ids)}
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
