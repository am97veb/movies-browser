import { Message, IconWrapper } from './styled';
import { ReactComponent as NoResultIcon } from './NoResultIcon.svg';

const NoResult = ({ searchTerm }) => {
  return (
    <>
      <Message>Sorry, there are no results for “{searchTerm}”</Message>
      <IconWrapper>
        <NoResultIcon />
      </IconWrapper>
    </>
  );
};

export default NoResult;

