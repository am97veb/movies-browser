import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    margin: 0px 16px 56px;
`;

export const Header = styled.h1`
    font-size: 36px;

`;

export const PeopleList = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 24px;
    padding: 0px;
    margin: 0px;

`;