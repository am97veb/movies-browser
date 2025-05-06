import React from "react";
import { Wrapper, Title, SpinnerWrapper } from "./styled";
import { ReactComponent as SpinnerIcon } from "./SpinnerIcon.svg";

const Loading = ({ searchTerm }) => {
  return (
    <Wrapper>
      <Title>Search results for “{searchTerm}”</Title>
      <SpinnerWrapper>
        <SpinnerIcon />
      </SpinnerWrapper>
    </Wrapper>
  );
};

export default Loading;
