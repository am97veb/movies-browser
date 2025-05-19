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

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 24px 16px;
  }
`;

export const MovieListGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 0;
  margin: 0 32px 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 24px 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 0 16px 24px;
  }
`;
