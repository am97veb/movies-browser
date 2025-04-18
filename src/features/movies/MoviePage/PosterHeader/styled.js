import styled from "styled-components";

export const MoviePageSection = styled.section`
    max-width: 1368px;
    min-width: 300px;
    margin: 32px auto;
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: black;
`;

export const PosterWrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  position: relative;
  padding: 0 32px;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: 
      linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106) 63.17%, rgba(0, 0, 0, 0.235) 68.85%, rgba(0, 0, 0, 0.493) 78.08%, rgba(0, 0, 0, 0.74) 85.86%, #000 92.87%),
      linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.69) 4.66%, rgba(0, 0, 0, 0.439) 9.34%, rgba(0, 0, 0, 0.206) 15.16%, rgba(0, 0, 0, 0) 24.22%),
      linear-gradient(90deg, #000 13.6%, rgba(0, 0, 0, 0.98) 14.58%, rgba(0, 0, 0, 0.96) 15.44%, rgba(0, 0, 0, 0.87) 16.3%, rgba(0, 0, 0, 0.23) 22.87%, rgba(0, 0, 0, 0) 26.64%),
      linear-gradient(270deg, #000 14.11%, rgba(0, 0, 0, 0.87) 15.08%, rgba(0, 0, 0, 0.72) 16.51%, rgba(0, 0, 0, 0.29) 19.99%, rgba(0, 0, 0, 0.16) 21.88%, rgba(0, 0, 0, 0) 25.68%);
    z-index: 2;
    pointer-events: none;
  }
`;

export const Poster = styled.img`
  width: 100%;
  max-height: 770px;
  object-fit: cover;
  position: relative;
  z-index: 1;
`;