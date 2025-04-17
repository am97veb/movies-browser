import { StyledPersonItem, Picture, Name } from "./styled";
import picture from "./movie browser picture.png"

export const PersonItem = () => (
    <StyledPersonItem>
        <Picture src={picture} />
        <Name>
            Json Scott Lee
        </Name>
    </StyledPersonItem>
)