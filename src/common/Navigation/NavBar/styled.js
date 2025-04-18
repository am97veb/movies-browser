import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {ReactComponent as Video} from "./Video.svg"

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 32px;
    justify-content: center;
    flex: 1;
    padding: 0;
    margin: 0;
`;

export const NavItem = styled.li`
    list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    border: 2px solid white;
    border-radius: 24px;
    padding: 13.5px 24px;
`;

export const BarWrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    
`;

export const Title = styled.p`
    color: white;
    padding: 0;
    margin: 0 0 0 12px;
`;

export const VideoSVG = styled(Video)`
    width: 40px;
    height: auto;
`;