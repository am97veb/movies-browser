import { StyledPersonItem, Picture, Name } from "./styled";
import picture from "./movie browser picture.png"

export const PersonItem = ({ person }) => (
    <StyledPersonItem>
        <Picture src={person ? person.image : null}></Picture>
        <Name>
            Json Scott Lee
        </Name>
    </StyledPersonItem>
)