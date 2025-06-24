import { StyledPersonItem, StyledLink, Picture, Name, ImageWrapper, Role } from "./styled";
import { EmptyPoster } from "../EmptyPoster";
import { toPersonDetails } from "../../core/routes";

export const PersonItem = ({ id, image, name, character, department }) => (
    <StyledPersonItem>
        <StyledLink to={toPersonDetails(id)}>
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
);