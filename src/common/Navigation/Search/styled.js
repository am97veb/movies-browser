import styled from "styled-components";
import { ReactComponent as Loupe } from "./Search.svg";

export const SearchContainer = styled.div`
    height: 48px;
    display: flex;
    flex: 1;
    justify-content: right;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        justify-content: center;
        }
`;

export const SearchWrapper = styled.div`
    max-width: 384px;
    min-width: 288px;
    width: 100%;
    display: flex;
    text-align: center;
    gap: 16px;
    background-color: white;
    border: 1px;
    border-radius: 33px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        max-width: 100%;
        }
`;

export const SearchInput = styled.input`
    border: none;
    border-radius: 0 33px 33px 0;
    font-size: 16px;
    font-weight: 400;
    outline: none;
`;

export const LoupeSVG = styled(Loupe)`
    width: 24px;
    height: auto;
    margin: 12px 0 12px 24px;
`;