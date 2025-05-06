import { StyledPersonItem, Picture, EmptyPoster, Name } from "./styled";
import { ReactComponent as EmptyProfilePath } from "./emptyProfilePath.svg"

export const PersonItem = ({ person }) => (
    <StyledPersonItem>
        {person &&
            (person.profile_path ?
                <Picture
                    src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}>
                </Picture>
                :
                <EmptyPoster>
                    <EmptyProfilePath />
                </EmptyPoster>
            )
        }
        <Name>
            {person && person.name}
        </Name>
    </StyledPersonItem>
);