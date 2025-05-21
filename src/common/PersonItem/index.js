import { StyledPersonItem, StyledLink, Picture, Name, ImageWrapper } from "./styled";
import { EmptyPoster } from "../EmptyPoster";

export const PersonItem = ({ id, image, name }) => {

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
            </StyledLink>
        </StyledPersonItem>
    )
};