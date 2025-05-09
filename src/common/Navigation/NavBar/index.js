import { NavList, NavItem, StyledNavLink, BarWrapper, Title, VideoSVG } from "./styled";
import { useDispatch } from "react-redux";
import { showPeople } from "../../../features/people/peopleSlice";
import { showMovies } from "../../../features/movies/moviesSlice";
import { firstPage } from "../../Pagination/paginationSlice";

export const NavigationBar = () => {
    const dispatch = useDispatch();

    return (
        <BarWrapper>
            <VideoSVG />
            <Title>
                <div>Movies Browser</div>
            </Title>
            <NavList>
                <NavItem>
                    <StyledNavLink to="/movies"
                        onClick={() =>
                            dispatch(showMovies())
                        }
                    >
                        MOVIES
                    </StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to="/people"
                        onClick={() => {
                            dispatch(firstPage());
                            dispatch(showPeople());
                        }}
                    >
                        PEOPLE
                    </StyledNavLink>
                </NavItem>
            </NavList>
        </BarWrapper>
    )
};