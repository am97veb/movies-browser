import styled from "styled-components";

export const MovieListWrapper = styled.section`
  max-width: 1432px;
  min-width: 300px;
  margin: 0 auto;
`;

export const MovieListHeading = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  margin: 56px 32px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 20px;
    margin: 24px 16px;
  }
`;

export const StyledMoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  justify-items: center;
  gap: 24px;
  padding: 0;
  margin: 0 32px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin: 0 24px 32px;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    margin: 0 16px 24px;
  }
`;
