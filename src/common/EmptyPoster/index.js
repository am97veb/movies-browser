import { useSelector } from "react-redux"
import { StyledEmptyPoster, StyledEmptyPosterPath, StyledEmptyProfilePath } from "./styled"
import { selectContentType } from "../Pagination/paginationSlice"
import { useLocation } from "react-router-dom";

export const EmptyPoster = () => {
    const contentType = useSelector(selectContentType);
    const location = useLocation();

    return (
        <StyledEmptyPoster float={location.pathname.includes("person") ? true : false} >
            {contentType === null || contentType === "movies"
                ?
                <StyledEmptyPosterPath />
                :
                <StyledEmptyProfilePath />
            }
        </StyledEmptyPoster>
    )
}