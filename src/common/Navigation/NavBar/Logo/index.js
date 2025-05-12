import { StyledLogoLink } from "./styled";
import { VideoSVG, Title } from "../styled";
import { useDispatch } from "react-redux";
import { showMovies } from "../../../../features/movies/moviesSlice";
import { firstPage } from "../../../Pagination/paginationSlice";

export const Logo = ({ title }) => {
    const dispatch = useDispatch();
    const onLogoClick = () => {
        dispatch(firstPage());
        dispatch(showMovies());
    };

    return (
        <StyledLogoLink to="/movies" onClick={onLogoClick} >
            <VideoSVG />
            <Title>
                {title}
            </Title>
        </StyledLogoLink>
    );
};