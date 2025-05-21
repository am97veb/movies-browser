import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 1368px;
    padding: 0;
    margin: 0 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        margin: 0px 22px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        margin: 0px 16px; 
    }
`;

export const Header = styled.header`
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
      
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        font-size: 20px;
        margin-bottom: 16px;
    }
`;

export const List = styled.ul`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(292px, 1fr));
        gap: 24px;
        justify-content: center;
        padding: 0;
        margin: 24px 0;
        list-style: none;
`;