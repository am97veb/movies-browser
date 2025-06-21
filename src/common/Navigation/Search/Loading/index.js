import { Wrapper, Title, SpinnerWrapper } from "./styled";
import { ReactComponent as SpinnerIcon } from "./spinnerIcon.svg";

export const Loading = ({ searchTerm }) => (
    <Wrapper>
      <Title>{searchTerm}</Title>
      <SpinnerWrapper>
        <SpinnerIcon />
      </SpinnerWrapper>
    </Wrapper>
  );