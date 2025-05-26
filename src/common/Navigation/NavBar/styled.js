import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Video } from "./Video.svg"

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 32px;
    justify-content: center;
    flex: 1;
    padding: 0;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        gap: 12px;
    }
`;

export const NavItem = styled.li`
    list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    padding: 13.5px 24px;

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 24px;
    }

    &.active {
        border: 2px solid ${({ theme }) => theme.colors.white};
        border-radius: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 12px;
        padding: 8px 12px;
    }
`;

export const BarWrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    word-break: normal;
    gap: 12px;
`;

export const Title = styled.div`
    color: ${({ theme }) => theme.colors.white};
    padding: 0;
    margin: 0 0 0 12px;
    font-size: 24px;
    font-weight: 500;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 13px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 13px;
    }
`;

export const VideoSVG = styled(Video)`
    width: 40px;
    height: auto;
`;