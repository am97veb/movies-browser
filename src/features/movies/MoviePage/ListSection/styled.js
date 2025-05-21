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
        justify-content: center;
        padding: 0;
        margin: 24px 0;
        list-style: none;
`; 