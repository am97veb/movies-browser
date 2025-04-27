import { Poster, PosterWrapper } from "./styled";
import MoviePoster from "./Poster.png"
import { BackgroundContainer } from "./styled";

export const PosterHeader = () => (
    <BackgroundContainer>
        <PosterWrapper>
            <Poster src={MoviePoster} alt="Poster" />
        </PosterWrapper>
    </BackgroundContainer>
);
