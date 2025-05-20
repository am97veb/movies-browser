import {
    Description,
    DescriptionPoster,
    DescriptionSection,
    DescriptionParagraph,
    Title,
    Year,
    InfoParagraph,
    ParagraphLabel,
    MovieGenresMap,
    MovieGenreTag,
} from "./styled";
import { MovieRating, StarIconStyled, RatingValue, Votes } from "../../../../common/MovieItem/styled";
import { StyledEmptyPosterPath, StyledEmptyPoster } from "../../../../common/EmptyPoster/styled";
import { DescriptionContent } from "./styled";

export const DescriptionTile = ({ poster, title, year, production, releaseDate, genres, rating, votes, description }) => (

    <DescriptionSection>
        {poster !== null ?
            <DescriptionPoster src={`https://image.tmdb.org/t/p/w500${poster}`} />
            :
            <StyledEmptyPoster>
                <StyledEmptyPosterPath />
            </StyledEmptyPoster>
        }
        <Description>
            <DescriptionContent>
                <Title>{title}</Title>
                <Year>{year}</Year>
                <InfoParagraph>
                    <ParagraphLabel>Production: </ParagraphLabel>
                    {production}
                </InfoParagraph>
                <InfoParagraph>
                    <ParagraphLabel>Release date: </ParagraphLabel>
                    {releaseDate}
                </InfoParagraph>
                <MovieGenresMap>
                    {genres && genres.map((genre, index) => (
                        <MovieGenreTag key={index}>{genre}</MovieGenreTag>
                    ))}
                </MovieGenresMap>
                <MovieRating>
                    <StarIconStyled />
                    <RatingValue>{rating}</RatingValue>
                    <Votes>{votes} votes</Votes>
                </MovieRating>
            </DescriptionContent>
            <DescriptionParagraph>{description}</DescriptionParagraph>
        </Description>
    </DescriptionSection>
);