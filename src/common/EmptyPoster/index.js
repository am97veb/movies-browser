import { StyledEmptyPoster, StyledEmptyPosterPath, StyledEmptyProfilePath } from "./styled"
import { useLocation } from "react-router-dom";

export const EmptyPoster = () => {
    const location = useLocation();

    const isMoviePage = location.pathname.includes("movies");
    const isPersonPage = location.pathname.includes("person");
    const isCastOrCrewInMoviePage = location.pathname.includes("movies/movie");
    const isCastOrCrewInPersonPage = location.pathname.includes("people/person");

    return (
        <StyledEmptyPoster $float={isPersonPage} >
            {(isMoviePage || isCastOrCrewInPersonPage) && !isCastOrCrewInMoviePage
                ?
                <StyledEmptyPosterPath />
                :
                <StyledEmptyProfilePath />
            }
        </StyledEmptyPoster>
    )
}