import React from "react";

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
  StyledLink
} from './styled';
import { onlyYear } from "../dateFormatter";

const MovieItem = ({ id, image, title, character, year, genres, rating, votes }) => {

  return (
    <MovieCard>
      <StyledLink to={`/movies/${id}`}>
        <MovieImageWrapper>
          <MovieImage src={image} alt={title} />
        </MovieImageWrapper>
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
          <StarIconStyled />
          <RatingValue>{rating}</RatingValue>
          <Votes>{votes} votes</Votes>
        </MovieRating>
      </StyledLink>
    </MovieCard >
  );
};

export default MovieItem;
