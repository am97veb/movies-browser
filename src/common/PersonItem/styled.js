import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledPersonItem = styled.li`
    max-width: 244px;
    width: 100%;
    height: 100%;
    background-color: ${({theme})=> theme.colors.white};
    border-radius: 5px;
    padding: 16px;
    box-shadow: 0px 4px 12px ${({theme})=> theme.colors.shadowGrey};
    list-style: none;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        max-width: 170px;
        padding: 8px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        max-width: 136px;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 321px;
    display: flex;
    margin-bottom: 12px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        max-width: 154px;
        max-height: 208px;
        margin-bottom: 8px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        width: 118px;
        height: 176px;
    }
`;

export const Picture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 5px;
`;

export const Name = styled.p`
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
    text-align: center;
    margin: 0 0 8px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {       
        font-size: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
       font-size: 18px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        font-size: 14px;
    }
`;

export const Role = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    margin: 0px;
    color: ${({ theme }) => theme.colors.lynch};

    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {       
        font-size: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        font-size: 13px;
    }
`;