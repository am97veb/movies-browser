import { Message, IconWrapper } from './styled';
import { ReactComponent as NoResultIcon } from './NoResultIcon.svg';

export const NoResult = ({ searchTerm }) =>  (
    <>
      <Message>Sorry, there are no results for “{searchTerm}”</Message>
      <IconWrapper>
        <NoResultIcon />
      </IconWrapper>
    </>
  );