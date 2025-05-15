import styled from "styled-components";
import { StarIconStyled, RatingValue, Votes } from "../../MovieItem/styled";

export const MoviePageSection = styled.section`
    max-width: 1400px;
    min-width: 300px;
    margin: 32px auto;
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: black;

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

export const PosterWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  padding: 0 0px;
  display: flex;
  justify-content: center;
`;

export const Poster = styled.img`
  width: 100%;
  max-height: 770px;
  object-fit: cover;
  position: relative;
  z-index: 1;
/* 
      @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
        margin: 56px 22px 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 30px;
        margin: 24px 22px 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        font-size: 20px;
        margin: 24px 16px 12px;
    } */
`;

export const PosterInfo = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
  z-index: 3;
  color: white;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    bottom: 16px;
    left: 16px;
  }
`;

export const InfoTitle = styled.h1`
  font-size: 64px;
  font-weight: 600;
  line-height: 77px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const InfoRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
`;

export const InfoRatingMain = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoRatingStar = styled(StarIconStyled)`
    width: 40px;
    height: 40px;
`;

export const InfoRatingValue = styled(RatingValue)`
    font-size: 30px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: 0px;
    vertical-align: middle;
    color: ${({ theme }) => theme.colors.white};
`;

export const InfoRatingScale = styled(InfoRatingValue)`
    font-size: 16px;
`;

export const InfoRatingVotes = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    vertical-align: middle;

    color: ${({ theme }) => theme.colors.white};
`;