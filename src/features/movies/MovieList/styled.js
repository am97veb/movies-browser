import styled from "styled-components";

export const MovieListWrapper = styled.section`
  padding: 32px 16px;
  width: 1368px;
  height: 1391px;
  margin: 0 auto;
  top: 150px;
  left: 276px;
`;

export const MovieListHeading = styled.h2`
  font-size: 36px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 24px;
`;

export const MovieListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 324px);
  gap: 24px;
  justify-content: center;
`;
