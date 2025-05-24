import styled, { css } from "styled-components";
import { ReactComponent as EmptyProfilePath } from "./emptyProfilePath.svg";
import { ReactComponent as EmptyPosterPath } from "./emptyPosterPath.svg";

export const StyledEmptyPoster = styled.div`
    max-width: 214px;
    height: 321px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 12px;
    background-color:${({theme})=> theme.colors.posterGrey};
    object-fit: cover;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 154px;
        height: 208px;
        margin-bottom: 8px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        width: 120px;
        height: 178px;
    }
`;

export const StyledEmptyPersonPoster = styled.div`
    max-width: 399px;
    max-height: 564px;
    width: 25vw;
    height: 35vw;
    margin: 0px 40px 20px 0px;
    float: left;
    background-color:${({theme})=> theme.colors.posterGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 12px;
    object-fit: cover;

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        width: 116px;
        height: 163px;
    }
`;

export const StyledEmptyProfilePath = styled(EmptyProfilePath)`
    height: 60px;

    @media (min-width: ${({ theme }) => theme.breakpoints.extraExtraLarge}px) {
        width: 68px;
        height: 80px;
    }
`;

export const StyledEmptyPosterPath = styled(EmptyPosterPath)`
    height: 60px;

    @media (min-width: ${({ theme }) => theme.breakpoints.extraExtraLarge}px) {
        width: 68px;
        height: 80px;
    }
`;