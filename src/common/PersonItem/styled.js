import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledPersonItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 255px;
    border-radius: 5px;
    padding: 20px 20px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    margin: 0px auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.extraExtraLarge}px) {
        width: 225px;  
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
        width: 255px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 225px; 
        padding: 14px 14px;  
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 165px;
        padding: 14px 14px;  
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        padding: 8px 8px;
        width: 136px;
        height: 245px; 
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const Picture = styled.img`
width: 214px;
height: 321px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 12px;
    object-fit: cover;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 138px;
        height: 208px;
        margin-bottom: 8px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        width: 120px;
        height: 178px;
        margin-bottom: 8px;
    }
`;

export const Name = styled.p`
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
    text-align: center;
    margin: 0px;

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