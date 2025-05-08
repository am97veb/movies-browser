import React from "react";
import { Link } from "react-router-dom";
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

const MovieItem = ({ id, image, title, year, genres, rating, votes }) => {
  return (
    <Link to={`/movies/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
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
    </Link>
  );
};

export default MovieItem;
