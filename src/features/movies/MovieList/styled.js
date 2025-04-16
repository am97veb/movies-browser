import styled from "styled-components";

export const MovieListWrapper = styled.section`
  padding: 32px 16px;
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
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  gap: 32px;
  justify-content: center;
`;
