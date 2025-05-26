import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as StarIcon } from './StarIcon.svg';

export const MovieCard = styled.li`
  max-width: 324px;
  width: 100%;
  border-radius: 5px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.colors.shadowGrey};
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    max-width: 576px;
    padding: 14px 14px 14px 14px;
  }
 
  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    padding: 14px 8px 14px 14px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    width: inherit;
    flex-direction: row;    
  }
`;

export const MovieImageWrapper = styled.div`
  width: 100%;
  height: 434px;
  border-radius: 5px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    height: 414px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    max-width: 26vw;
    height: auto;
    align-self: flex-start;
  }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    max-width: 114px;
    height: 169px;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 5px;

  @media (min-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    min-height: 174px;
  }
`;

export const AboutMovie = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const MovieTitle = styled.h3`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};
  margin: 0px 0px 8px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    font-size: 16px;
  }
`;

export const MovieYear = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.lightSlateGrey};
  margin: 0 0 8px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    font-size: 13px;
    line-height: 130%;
  }
`;

export const MovieCharacter = styled(MovieYear)`
  margin: 0px 0px 8px;
`;

export const MovieGenres = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    gap: 4px;
  }
`;

export const GenreTag = styled.span`
  padding: 8px 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.brightGrey};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    font-size: 12px;
    padding: 4px 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const MovieRating = styled.div`
  display: flex;
  margin-top: auto;
  gap: 12px;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    gap: 8px;
  }
`;

export const RatingValue = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.black};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 13px;
    line-height: 130%;
    margin-top: 0;
  }
`;

export const StarIconStyled = styled(StarIcon)`
  width: 24px;
  height: auto;
  fill: ${({ theme }) => theme.colors.deepLemon};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 16px;
  }
`;

export const Votes = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.lightSlateGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 13px;
    line-height: 130%;
  }
`;
