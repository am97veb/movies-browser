import {
  IconWrapper,
  Message,
  Description,
  Button,
} from "./styled";
import { ReactComponent as ErrorIcon } from "./ErrorIcon.svg";

export const Error = () => (
  <>
    <IconWrapper>
      <ErrorIcon />
    </IconWrapper>
    <Message>Ooops! Something went wrong...</Message>
    <Description>
      Please check your network connection and try again
    </Description>
    <Button href="/">Back to home page</Button>
  </>
);