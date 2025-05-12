import { NavList, NavItem, StyledNavLink, BarWrapper} from "./styled";
import { useDispatch } from "react-redux";
import { showPeople } from "../../../features/people/peopleSlice";
import { showMovies } from "../../../features/movies/moviesSlice";
import { Logo } from "./Logo";

export const NavigationBar = () => {
    const dispatch = useDispatch();

    return (
        <BarWrapper>
            <Logo title={"Movies Browser"} />
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