import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectMovies, selectGenres, selectFetchMoviesStatus } from "../moviesSlice";
import MovieItem from "../../../common/MovieItem";
import { Pagination } from "../../../common/Pagination";
import { MovieListWrapper, MovieListHeading, StyledMoviesList } from "./styled";
import { onlyYear } from "../../../common/dateFormatter";
import { mapGenres } from "../../../common/mapGenres";
import { useQueryParameters } from "../../../common/Navigation/Search/queryParameters";
import searchQueryParamName from "../../../common/Navigation/Search/searchQueryParamName";
import { selectSearchResult, selectQuery } from "../../people/searchSlice";
import { selectPage } from "../../../common/Pagination/paginationSlice";
import { SwitchContent } from "../../../common/SwitchContent";

const MoviesList = () => {
  const query = useQueryParameters(searchQueryParamName);
  const genresList = useSelector(selectGenres);
  const sliceQuery = useSelector(selectQuery);
  const page = useSelector(selectPage);
  const fetchStatus = useSelector(selectFetchMoviesStatus);

  const movies = useSelector(state =>
    (query?.trim() && query === sliceQuery)
      ? selectSearchResult(state)
      : selectMovies(state));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page])

  return (
    <MovieListWrapper>
      <MovieListHeading>Popular Movies</MovieListHeading>
      <SwitchContent status={fetchStatus}
        content={
          <>
            <StyledMoviesList>
              {Array.isArray(movies) &&
                movies.map(movie => (
                  <MovieItem
                    key={movie.id}
                    id={movie.id}
                    image={movie.poster_path}
                    title={movie.title}
                    character={movie.character}
                    year={onlyYear(movie.release_date)}
                    genres={mapGenres(movie.genre_ids, genresList)}
                    rating={movie.vote_average.toFixed(1)}
                    votes={movie.vote_count}
                  />
                ))}
            </StyledMoviesList>
            <Pagination />
          </>
        } />
    </MovieListWrapper>
  );
};

export default MoviesList;
