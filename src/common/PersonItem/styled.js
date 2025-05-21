import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledPersonItem = styled.li`
    max-width: 255px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    padding: 20px 20px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    margin: 0px auto;
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

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const CharacterName = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    margin: 8px 0 16px ;
    color: ${({ theme }) => theme.colors.lynch};
`;