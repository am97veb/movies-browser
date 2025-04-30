import styled from "styled-components";
import { ReactComponent as StarIcon } from './StarIcon.svg'; 
import { theme } from '../../../theme';

export const MovieCard = styled.div`
  width: 324px;
  height: 650px;
  border-radius: 5px;
  padding: 16px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  box-sizing: border-box;
`;

export const MovieImageWrapper = styled.div`
  width: 292px;
  height: 434px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const MovieTitle = styled.h3`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};
  margin: 16px 0 8px;
  text-align: left;
`;

export const MovieYear = styled.p`
  
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.lightSlateGrey};
  margin: 0 0 24px;
  text-align: left;
`;


export const MovieGenres = styled.div`
  display: flex;
  gap: 10px;
   margin: 0 0 24px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const GenreTag = styled.span`
  display: inline-block;
   padding: 8px 16px;
   border-radius: 5px;
   background-color: ${({ theme }) => theme.colors.brightGrey};
   color: ${({ theme }) => theme.colors.black};
   
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  white-space: nowrap;
`;

export const MovieRating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const RatingValue = styled.span`
  
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.black};
`;


export const StarIconStyled = styled(StarIcon)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.colors.deepLemon};
`;

export const Votes = styled.span`
  
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.lightSlateGrey};
`;

