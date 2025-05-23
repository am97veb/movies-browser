import { StyledPersonItem, StyledLink, Picture, Name, ImageWrapper, Role } from "./styled";
import { EmptyPoster } from "../EmptyPoster";

export const PersonItem = ({ id, image, name, character, department }) => {

    return (
        <StyledPersonItem>
            <StyledLink to={`/people/person/${id}`}>
                <ImageWrapper>
                    {image !== null ?
                        <Picture
                            src={`https://image.tmdb.org/t/p/w500${image}`}>
                        </Picture>
                        :
                        <EmptyPoster />
                    }
                </ImageWrapper>
                <Name>
                    {name}
                </Name>
                    <Role>
                        {character}
                        {department}
                    </Role>
            </StyledLink>
        </StyledPersonItem>
    )
};