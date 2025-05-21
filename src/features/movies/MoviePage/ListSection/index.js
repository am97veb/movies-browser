import { Header, PeopleSectionStyled, CastAndCrewList } from "./styled";

export const PeopleListSection = ({ headerContent, sectionContent }) => (
    <PeopleSectionStyled>
        <Header>{headerContent}</Header>
        <CastAndCrewList>{sectionContent}</CastAndCrewList>
    </PeopleSectionStyled>
);
