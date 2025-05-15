import styled from "styled-components";
import { List } from "../../../people/PersonPage/ListSection/styled";

export const SectionStyled = styled.section`
    max-width: 1368px;
    padding: 0;
    margin: 16px;
`;

export const Header = styled.header`
    font-size: 36px;
    font-weight: 600;
`;

export const CastAndCrewList = styled(List)`
    grid-template-columns: repeat(5, 1fr);

    @media (max-width: ${({theme}) => theme.breakpoints.extraExtraLarge}px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${({theme}) => theme.breakpoints.extraLarge}px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${({theme}) => theme.breakpoints.large}px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${({theme}) => theme.breakpoints.small}px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${({theme}) => theme.breakpoints.extraSmall}px) {
        grid-template-columns: 1fr;     
       
    }
`;