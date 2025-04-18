import { useDispatch } from "react-redux";
import { StyledNav, StyledNavLink, NavList } from "./styled";
import { showPeople } from "../../features/people/peopleSlice";

export const Navigation = () => {
    const dispatch = useDispatch();

    return (
        <StyledNav>
            <NavList>
                <li>
                    <StyledNavLink to="/movie">
                        MOVIES
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/people" onClick={() => dispatch(showPeople())}>
                        PEOPLE
                    </StyledNavLink>
                </li>
            </NavList>
        </StyledNav>
    )
};