import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, selectGenres, selectFetchMoviesStatus} from "../moviesSlice";
import { MovieItem } from "../../../common/MovieItem";
import { Pagination } from "../../../common/Pagination";
import { MovieListWrapper, MovieListHeading, StyledMoviesList } from "./styled";
import { onlyYear } from "../../../common/dateFormatter";
import { mapGenres } from "../../../common/mapGenres";
import { useQueryParameters, useReplaceQueryParameter } from "../../../common/Navigation/Search/queryParameters";
import searchQueryParamName from "../../../common/Navigation/Search/searchQueryParamName";
import { selectSearchResult, selectQuery, clearSearch, selectSearchStatus } from "../../../common/Navigation/Search/searchSlice";
import { selectPage, setPage } from "../../../common/Pagination/paginationSlice";
import { SwitchContent } from "../../../common/SwitchContent";

export const MoviesList = ({ searchTerm }) => {
  const genresList = useSelector(selectGenres);
  const sliceQuery = useSelector(selectQuery);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const setUrl = useReplaceQueryParameter();
  const query = useQueryParameters(searchQueryParamName);
  const pageFromUrl = useQueryParameters("page");

  const fetchStatus = useSelector(state =>
    (query?.trim() && query === sliceQuery)
      ? selectSearchStatus(state)
      : selectFetchMoviesStatus(state));

  const movies = useSelector(state =>
    (query?.trim() && query === sliceQuery)
      ? selectSearchResult(state)
      : selectMovies(state));

  useEffect(() => {
    const pageFromUrlToNumber = pageFromUrl ? parseInt(pageFromUrl) : 1;

    if (page !== pageFromUrlToNumber) {
      dispatch(setPage(pageFromUrlToNumber));
    }
  }, [pageFromUrl, dispatch])

  useEffect(() => {
    window.scrollTo(0, 0);

    setUrl({
      key: "page",
      value: page > 1 ? page : null,
    });
  }, [page])

  return (
    <SwitchContent status={fetchStatus}
      content={
        <MovieListWrapper>
          <MovieListHeading>{searchTerm || "Popular Movies"}</MovieListHeading>
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
        </MovieListWrapper>
      }
    />
  );
};