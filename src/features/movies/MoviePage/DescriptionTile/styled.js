import styled from "styled-components";
import { MovieGenres, GenreTag } from "../../../../common/MovieItem/styled";

export const DescriptionSection = styled.section`
    margin: 16px;
    margin-bottom: 64px;
    padding: 40px 40px;
    background-color: white;
    gap: 32px;

    &::after {
        content: "";
        display: block;
        clear: both;
    }

        @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
            padding: 32px;
        }
                
        @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
            padding: 16px;
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
            padding: 16px;
        }
`;

export const DescriptionContent = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
`;

export const DescriptionPoster = styled.img`
    max-height: 464px;
    min-height: 169px;
    max-width: 312px;
    min-width: 114px;
    margin: 0px 40px 20px 0px;

    object-fit: cover;
    float: left;

        @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
            width: 256px;
            height: auto;
            margin: 0px 16px 16px 0px;
        }
                
        @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
            width: 152px;
            margin: 0px 16px 8px 0px;
        }
        
        @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
            width: 128px;
            margin: 0px 16px 8px 0px;
        }
`;

export const Description = styled.div`
    font-size: 20px;
    max-width: 100%;

`;

export const DescriptionParagraph = styled.p`
    font-size: 20px;
    margin: 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 100%;
        clear: both;
        display: block;
        font-size: 16px;
    }

     @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 14px;
        clear: both;
  }
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 600px;
    line-height: 120%;
    margin: 8px 0 0 0;

        @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
            font-weight: 500px;
            font-size: 16px;
            line-height: 130%;
        }
                
        @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
            font-weight: 500px;
            font-size: 16px;
            line-height: 130%;
            margin: 0;
        }
        
        @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
            font-weight: 500px;
            font-size: 16px;
            line-height: 130%;
            margin: 0;
        }
`;

export const Year = styled.p`
    font-size: 22px;
    font-weight: 400px;
    margin: 24px 0;

        @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
            font-weight: 400px;
            font-size: 13px;
            line-height: 130%;
            margin: 8px 0;
        }
                
        @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
            font-weight: 400px;
            font-size: 13px;
            line-height: 130%;
            margin: 4px 0 8px 0;
        }
        
        @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
            font-weight: 400px;
            font-size: 13px;
            line-height: 130%;
            margin: 4px 0;
        }
`;

export const InfoParagraph = styled.p`
    font-size: 18px;
    font-weight: 400px;
    margin:0 0 8px 0 ;
    color: ${({ theme }) => theme.colors.black};

        @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
            font-size: 16px;
        }
                
        @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
            font-size: 12px;
        }
        
        @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
            font-size: 12px;
        }
`;

export const ParagraphLabel = styled.span`
    color: ${({ theme }) => theme.colors.stormGray};

        @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
            font-size: 16px;
        }
                
        @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
            font-size: 12px;
            display: none;
        }
        
        @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
            font-size: 12px;
        }
`;

export const MovieGenresMap = styled(MovieGenres)`
    margin: 24px 0;
    gap: 16px;

        @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
            margin: 16px 0;
            gap: 8px;
        }
                
        @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
            margin: 8px 0;
        }
        
        @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        }
`;

export const MovieGenreTag = styled(GenreTag)`


        @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
            padding: 8px 16px;
            font-size: 10px;
            font-weight: 400;
        }
                
        @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
            padding: 4px 8px;
        }
        
        @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
            padding: 4px 8px;
        }
`;