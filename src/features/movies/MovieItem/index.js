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
  Votes,
  MovieCharacter
} from './styled';
import { onlyYear } from "../../../common/dateFormatter";

const MovieItem = ({ id, image, title, character, year, genres, rating, votes }) => {
  
  return (
    <Link to={`/movies/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <MovieCard>
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
      </MovieCard>
    </Link>
  );
};

export default MovieItem;

