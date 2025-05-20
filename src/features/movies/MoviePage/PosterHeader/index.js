import { InfoRating, InfoRatingMain, InfoRatingScale, InfoRatingStar, InfoRatingValue, InfoRatingVotes, InfoTitle, Poster, PosterInfo, PosterWrapper } from "./styled";
import { BackgroundContainer } from "./styled";

export const PosterHeader = ({ backdrop, title, rating, votes }) => {

    return (
        backdrop && (
            <BackgroundContainer>
                <PosterWrapper>
                    <Poster src={`https://image.tmdb.org/t/p/original${backdrop}`} />
                    <PosterInfo>
                        <InfoTitle>{title}</InfoTitle>
                        <InfoRating>
                            <InfoRatingMain>
                                <InfoRatingStar />
                                <InfoRatingValue>
                                    {rating}
                                    <InfoRatingScale> /10</InfoRatingScale>
                                </InfoRatingValue>
                            </InfoRatingMain>
                            <InfoRatingVotes>{votes} votes</InfoRatingVotes>
                        </InfoRating>
                    </PosterInfo>
                </PosterWrapper>
            </BackgroundContainer>
        )
    );
};