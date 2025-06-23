import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin: 56px 32px 24px;
  text-align: left;
`;

export const SpinnerWrapper = styled.div`
  width: 91px;
  height: 91px;
  margin: 120px auto 0;

  svg {
    width: 100%;
    height: 100%;
    display: block;

    animation: spin 1.5s linear infinite;
    transform-origin: center;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;