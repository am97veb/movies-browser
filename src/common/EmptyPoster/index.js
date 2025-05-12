import { useSelector } from "react-redux"
import { StyledEmptyPoster, StyledEmptyPosterPath, StyledEmptyProfilePath } from "./styled"
import { selectContentType } from "../Pagination/paginationSlice"

export const EmptyPoster = () => {
    const contentType = useSelector(selectContentType);

    return (
        <StyledEmptyPoster >
            {contentType === null || contentType === "movies"
                ?
                <StyledEmptyPosterPath />
                :
                <StyledEmptyProfilePath />
            }
        </StyledEmptyPoster>
    )
}