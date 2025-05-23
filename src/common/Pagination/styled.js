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
    background-color: rgba(214, 228, 255, 1);
    color: rgba(51, 51, 51, 1);
    border-radius: 5px;
    padding: 8px 16px;

    ${({ disabled }) => disabled && css`
        background-color: rgba(228, 230, 240, 1);
        color: rgba(24, 24, 27, 1);
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
    color: rgba(98, 116, 137, 1);
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
    color: rgba(24, 24, 27, 1);
    font-weight: 600;
`;

export const LeftArrow = styled(Arrow)`
    color:rgba(0, 68, 204, 1);

    ${({ disabled }) => disabled && css`
        color: rgba(126, 131, 154, 1);
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
    color: rgba(0, 68, 204, 1);

    ${({ disabled }) => disabled && css`
        color: rgba(126, 131, 154, 1);
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