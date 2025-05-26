import styled, { css } from "styled-components";
import { ReactComponent as Arrow } from "./arrow.svg";

export const StyledPagination = styled.nav`
    display: flex;
    justify-content: center;
    margin-bottom: 103px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
       margin-bottom: 41px;
    }
`;

export const StyledList = styled.ul`
    display: flex;
    justify-content: space-around;
    margin: 0px;
    padding: 0px;
    list-style: none;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
       gap: 8px;
    }
`;

export const Button = styled.li`
    background-color:${({ theme }) => theme.colors.pattensBlue};
    color: ${({ theme }) => theme.colors.mineShaft};
    border-radius: 5px;
    padding: 8px 16px;

    ${({ disabled }) => disabled && css`
        background-color: ${({ theme }) => theme.colors.brightGrey};
        color: ${({ theme }) => theme.colors.woodsmoke};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        padding: 8px 12px;
    }
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    font-size: 14px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 0px;
        gap: 0px; 
    }
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.lynch};
    margin: 0px 14px;
    display: flex;
    gap:8px;
    align-items: center;
    font-size: 16px;
    line-height: 150%;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        gap: 2px;
        font-size: 10px;
        margin: 0px;
        line-height: 24px;
    }
`;

export const Page = styled.span`
    color: ${({ theme }) => theme.colors.woodsmoke};
    font-weight: 600;
`;

export const LeftArrow = styled(Arrow)`
    color:${({ theme }) => theme.colors.scienceBlue};

    ${({ disabled }) => disabled && css`
        color: ${({ theme }) => theme.colors.waterloo};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 5px;
        height: 8px;
    }
`;

export const MobileLeftArrow = styled(LeftArrow)`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        display: inline-block;
        margin-right: 4px;
        width: 5px;
        height: 8px;
    }
`;

export const RightArrow = styled(Arrow)`
    rotate: 0.5turn;
    color: ${({ theme }) => theme.colors.scienceBlue};

    ${({ disabled }) => disabled && css`
        color: ${({ theme }) => theme.colors.waterloo};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 5px;
        height: 8px;
    }
`;

export const MobileRightArrow = styled(RightArrow)`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        display: inline-block;
        margin-left: 4px;
        width: 5px;
        height: 8px;
    }
`;