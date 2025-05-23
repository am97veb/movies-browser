import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as StarIcon } from './StarIcon.svg';

export const MovieCard = styled.li`
  max-width: 324px;
  width: 100%;
  height: 100%; 
  border-radius: 5px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
 
    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
      height: 201px;
      padding: 14px 8px 14px 14px;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
      width: inherit;
      flex-direction: row;    
    }
`;

export const MovieImageWrapper = styled.div`
  width: 100%;
  height: 434px;
  border-radius: 5px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
      max-width: 114px;
      height: 169px;
      align-self: flex-start;
    }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 5px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const MovieRating = styled.div`
  display: flex;
  margin-top: auto;
  gap: 12px;
`;

export const RatingValue = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
      font-size: 13px;
      line-height: 130%;
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
