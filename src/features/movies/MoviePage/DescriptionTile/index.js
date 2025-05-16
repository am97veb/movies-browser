import {
    Description,
    DescriptionPoster,
    DescriptionSection,
    DescriptionParagraph,
    Title,
    Year,
    InfoParagraph,
    ParagraphLabel,
} from "./styled";
import { MovieGenres, GenreTag } from "../../../../common/MovieItem/styled";
import { MovieRating, StarIconStyled, RatingValue, Votes } from "../../../../common/MovieItem/styled";

export const DescriptionTile = ({ poster, title, year, production, releaseDate, genres, rating, votes, description }) => (

    <DescriptionSection>
        <DescriptionPoster src={`https://image.tmdb.org/t/p/w500${poster}`} />
        <Description>
            <Title>{title}</Title>
            <Year>{year}</Year>
            <InfoParagraph>
                <ParagraphLabel>Production: </ParagraphLabel>
                No data from API!!
            </InfoParagraph>
            <InfoParagraph>
                <ParagraphLabel>Release date: </ParagraphLabel>
                {releaseDate}
            </InfoParagraph>
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
            <DescriptionParagraph>{description}</DescriptionParagraph>
        </Description>
    </DescriptionSection>
);