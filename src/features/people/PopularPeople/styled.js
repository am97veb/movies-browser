import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 1432px;
    min-width: 300px;
    margin: 0px auto;
`;

export const Header = styled.h1`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    margin: 56px 32px 24px;

    @media (max-width: ${({theme}) => theme.breakpoints.large}px) {
        margin: 56px 22px 24px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.extraSmall}px) {
        margin: 24px 16px 12px;
    }
`;

export const PeopleList = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap:24px;
    padding: 0px;
    margin: 0px 32px 56px;

    @media (max-width: ${({theme}) => theme.breakpoints.large}px) {
        grid-template-columns: repeat(5, 1fr);
        gap:16px;
        margin: 0px 18px 56px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${({theme}) => theme.breakpoints.small}px) {
        grid-template-columns: repeat(3, 1fr);
        margin: 0px 16px 50px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.extraSmall}px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);      
        margin: 0px 16px 50px;
    }
`;