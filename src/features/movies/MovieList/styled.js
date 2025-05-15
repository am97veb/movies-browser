import styled from "styled-components";

export const MovieListWrapper = styled.section`
    max-width: 1432px;
    min-width: 300px;
    margin: 0px auto; 
`;

export const MovieListHeading = styled.h1`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    margin: 56px 32px 24px;
`;

export const MovieListGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding: 0px;
    margin: 0px 32px 40px;
`;
