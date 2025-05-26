import styled from 'styled-components';

export const Message = styled.h2`
  
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  max-width: 674px;
  margin: 150px auto 0 auto; 
`;

export const IconWrapper = styled.div`
  margin: 50px auto 0 auto;
  max-width: 668px;
  width: 100%;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }
`;
