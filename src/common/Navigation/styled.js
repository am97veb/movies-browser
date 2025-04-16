import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: row;
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 32px
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
`;