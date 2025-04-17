import { StyledNav, StyledNavLink, NavList } from "./styled";

export const Navigation = () => (
    <StyledNav>
        <NavList>
            <li>
                <StyledNavLink to="/movie">
                    MOVIES
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to="/people">
                    PEOPLE
                </StyledNavLink>
            </li>
        </NavList>
    </StyledNav>
);