import React from "react";
import { useSelector } from "react-redux";
import { selectPage } from "../../../common/Pagination/paginationSlice";
import { selectMovies, selectGenres } from "../moviesSlice";
import MovieItem from "../MovieItem";
import { Pagination } from "../../../common/Pagination";
import { MovieListWrapper, MovieListHeading, MovieListGrid } from "./styled";

const MOVIES_PER_PAGE = 8;

const MovieList = () => {
  const page = useSelector(selectPage);
  const data = useSelector(selectMovies);
  const genresList = useSelector(selectGenres);

  const allMovies = data?.results || [];
  const startIndex = (page - 1) * MOVIES_PER_PAGE;
  const visibleMovies = allMovies.slice(startIndex, startIndex + MOVIES_PER_PAGE);

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
        {visibleMovies.map((movie) => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            year={movie.release_date?.slice(0, 4)}
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
