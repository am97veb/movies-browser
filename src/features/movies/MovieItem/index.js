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
  Votes
} from './styled';

 const MovieItem = ({ image, title, year, genres, rating, votes }) => {
  return (
    <MovieCard>
      <MovieImageWrapper>
        <MovieImage src={image} alt={title} />
      </MovieImageWrapper>
      <MovieTitle>{title}</MovieTitle>
      <MovieYear>{year}</MovieYear>
      <MovieGenres>
        {genres.map((genre, index) => (
          <GenreTag key={index}>{genre}</GenreTag>
        ))}
      </MovieGenres>
      <MovieRating>
        <StarIconStyled />
        <RatingValue>{rating}</RatingValue>
        <Votes>{votes} votes</Votes>
      </MovieRating>
    </MovieCard>
  );
};

export default MovieItem;
