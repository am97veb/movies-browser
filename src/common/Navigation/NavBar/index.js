import { NavList, NavItem, StyledNavLink, BarWrapper, Title, VideoSVG } from "./styled";
import { useDispatch } from "react-redux";
import { showPeople } from "../../../features/people/peopleSlice";

export const NavigationBar = () => {
    const dispatch = useDispatch();

    return (
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
                <StyledNavLink to="/people" onClick={() => dispatch(showPeople())}>
                    PEOPLE
                </StyledNavLink>
            </NavItem>
        </NavList>
    </BarWrapper>
    )
};