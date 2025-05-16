import { StyledPersonItem, StyledLink, Picture, Name } from "./styled";
import { showPerson } from "../../features/people/PersonPage/personSlice";
import { useDispatch } from "react-redux";
import { EmptyPoster } from "../EmptyPoster";

export const PersonItem = ({ id, image, name }) => {
    const dispatch = useDispatch();

    return (
        <StyledPersonItem>
            <StyledLink
                to={`/people/person/${id}`}
                onClick={() => { dispatch(showPerson(id)) }}
            >
                {image !== null ?
                    <Picture
                        src={`https://image.tmdb.org/t/p/w500${image}`}>
                    </Picture>
                    :
                    <EmptyPoster />
                }
                <Name>
                    {name}
                </Name>
            </StyledLink>
        </StyledPersonItem>
    )
};