import { StyledPersonItem, Picture, Name } from "./styled";
import picture from "./movie browser picture.png"

export const PersonItem = ({ person }) => (
    <StyledPersonItem>
        <Picture
            src={person && person.profile_path}>
        </Picture>
        <Name>
            {person && person.name}
        </Name>
    </StyledPersonItem>
);