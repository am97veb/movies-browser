import styled from "styled-components";

export const DescriptionSection = styled.section`
    margin: 16px;
    padding: 40px 40px;
    background-color: white;
    display: flex;
    flex-direction: row;
    gap: 32px;
`;

export const DescriptionPoster = styled.img`
    max-height: 464px;
    max-width: 312px;
`;

export const Description = styled.div`
    font-size: 20px;
`;

export const DescriptionParagraph = styled.p`
    font-size: 20px;

     @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 600px;
    line-height: 120%;
`;

export const Year = styled.p`
    font-size: 22px;
    font-weight: 400px;
`;

export const InfoParagraph = styled.p`
    font-size: 18px;
    font-weight: 400px;
    color: rgba(116, 120, 139, 1);
`;

export const ParagraphLabel = styled.span`
    color: black;
`;
