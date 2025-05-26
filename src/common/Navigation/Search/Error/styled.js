import styled from "styled-components";

export const IconWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: 40px auto 24px;
`;

export const Message = styled.h1`
  
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  text-align: center;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-align: center;
  max-width: 430px;
  margin: 0 auto 32px;
`;

export const Button = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  padding: 16px 24px;
  border-radius: 5px;
  text-align: center;
`;
