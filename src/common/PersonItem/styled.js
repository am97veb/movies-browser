import styled from "styled-components";

export const StyledPersonItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    max-width: 208px;
    border-radius: 5px;
    padding: 16px 16px 22px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        width: 136px;
        height: 245px; 
    }
`;

export const Picture = styled.img`
    width: 100%;
    border-radius: 5px;
    margin-bottom: 12px;
    object-fit: cover;

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        width: 120px;
        height: 178px;
        margin-bottom: 8px;
    }
`;

export const EmptyPoster = styled.div`
    width: 100%;
    height: 100%;
    max-width: 176px;
    max-height: 264px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 12px;
    background-color:rgba(196, 196, 196, 1);

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        width: 120px;
        height: 178px;
        margin-bottom: 8px;
    }
`;

export const Name = styled.p`
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
    text-align: center;
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}px) {       
        font-size: 2vw;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {       
        font-size: 2vw;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
       font-size: 2.5vw;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
       font-size: 3vw;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px) {
        font-size: 14px;
    }
`;