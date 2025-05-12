import { Description, Picture, StyledSection, Biography, Name, Wrapper, InnerWrapper, Key, Value, DeletedInMobile, } from "./styled";
import { dateFormatter } from "../../../../common/dateFormatter";
import { EmptyPoster } from "../../../../common/EmptyPoster";

export const DescriptionTile = ({ person }) => (
    <StyledSection>
        {person.profile_path !== null ?
            <Picture
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}>
            </Picture>
            :
            <EmptyPoster />
        }
        <Description>
            <Name>{person.name} </Name>
            <Wrapper>
                <Key>
                    <DeletedInMobile>date of </DeletedInMobile>birth:
                </Key>
                <Value>
                    {dateFormatter(person.birthday) || "No information"}
                </Value>
            </Wrapper>
            <InnerWrapper>
                <Key>
                    place of birth:
                </Key>
                <Value>
                    {person.place_of_birth || "No information"}
                </Value>
            </InnerWrapper>
            <Biography>
                {person.biography}
            </Biography>
        </Description>
    </StyledSection>
);