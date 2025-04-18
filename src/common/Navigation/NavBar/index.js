import { NavList, NavItem, StyledNavLink, BarWrapper, Title, VideoSVG } from "./styled";


export const NavigationBar = () => (
    <BarWrapper>
        <VideoSVG />
        <Title>
            <p>Movies Browser</p>
        </Title>
        <NavList>
            <NavItem>
                <StyledNavLink to="/movie">
                    MOVIES
                </StyledNavLink>
            </NavItem>
            <NavItem>
                <StyledNavLink to="/movies">
                    PEOPLE
                </StyledNavLink>
            </NavItem>
        </NavList>
    </BarWrapper>
);