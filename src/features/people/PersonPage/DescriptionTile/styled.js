import styled from "styled-components";

export const StyledSection = styled.section`
    max-width: 1368px;
    margin: 56px 16px 64px;
    padding: 40px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black}; 
    
    &::after {
        content: "";
        display: block;
        clear: both;
    }
    
   @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
        display: block;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        padding: 20px;
        margin: 30px 22px;
        gap: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        padding: 16px;
        margin: 22px 16px 24px;
        gap: 16px;
    }
`;

export const Picture = styled.img`
    max-width: 399px;
    max-height: 564px;
    width: 25vw;
    height: 35vw;
    border-radius: 5px;
    object-fit: cover;
    float: left;
    margin: 0px 40px 20px 0px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
        margin: 0 26px 20px 0px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        width: 116px;
        height: 163px;
        margin: 0 16px 16px 0px;
    }
`;

export const Description = styled.div`

`;

export const Name = styled.h1`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
    margin: 0px 0px 24px 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
        font-size: 30px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
       font-size:24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        font-size: 14px;
    }
`;

export const Biography = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 160%;
    margin: 24px 0px 0px;
   
    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
        font-size: 18px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        clear: both;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        font-size: 14px;
    }
 `;

export const Wrapper = styled.dl`
    display: grid;
    grid-template-columns: auto 1fr;
    font-size: 18px;
    font-weight: 400;
    line-height: 120%;
    margin: 0px 0px 8px 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        font-size: 12px;
    }
 `;

export const InnerWrapper = styled(Wrapper)`

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        gap:4px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        font-size: 12px;
    }
`;

export const Key = styled.dt`
    color:${({ theme }) => theme.colors.lynch};
    margin-right: 10px;
    
    &::first-letter{
        text-transform: capitalize;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        margin-right: 4px;    
    }
 `;

export const DeletedInMobile = styled.span`
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        display: none;
    }
 `;

export const Value = styled.dd`
   margin: 0px;
`;