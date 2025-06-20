import {
  MovieCard,
  MovieImageWrapper,
  MovieImage,
  MovieTitle,
  MovieYear,
  MovieGenres,
  GenreTag,
  MovieRating,
  RatingValue,
  StarIconStyled,
  Votes,
  MovieCharacter,
  StyledLink,
  AboutMovie
} from './styled';
import { onlyYear } from "../dateFormatter";
import { EmptyPoster } from '../EmptyPoster';
import { toMovieDetails } from '../../core/routes';

export const MovieItem = ({ id, image, title, character, year, genres, rating, votes }) => (
  <MovieCard>
    <StyledLink to={toMovieDetails(id)}>
      <MovieImageWrapper>
        {image !== null ?
          <MovieImage src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
          :
          <EmptyPoster />}
      </MovieImageWrapper>

      <AboutMovie>
        <MovieTitle>{title}</MovieTitle>
        {character ?
          <MovieCharacter>{character} ({onlyYear(year)})</MovieCharacter>
          :
          <MovieYear>{onlyYear(year)}</MovieYear>
        }
        <MovieGenres>
          {genres && genres.map((genre, index) => (
            <GenreTag key={index}>{genre}</GenreTag>
          ))}
        </MovieGenres>
        <MovieRating>
          {votes > 0 ?
            <>
              <StarIconStyled />
              <RatingValue>{rating}</RatingValue>
              <Votes>{votes} votes</Votes>
            </>
            :
            <Votes>No votes</Votes>}
        </MovieRating>
      </AboutMovie>
    </StyledLink>
  </MovieCard >
);