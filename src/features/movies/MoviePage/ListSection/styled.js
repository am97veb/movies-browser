import styled from "styled-components";

export const PeopleSectionStyled = styled.section`
    max-width: 1368px;
    padding: 0;
    margin: 0 16px 64px;
`;

export const Header = styled.header`
    font-size: 36px;
    font-weight: 600;
`;

export const CastAndCrewList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(208px, 1fr));
    gap: 24px;
    padding: 0;
    margin: 24px 0;
    list-style: none;
  
    @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
        gap:16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-template-columns: repeat(auto-fit, minmax(132px, 1fr));
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
`; 