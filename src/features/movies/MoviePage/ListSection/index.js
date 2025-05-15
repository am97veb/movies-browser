import { Header, SectionStyled, CastAndCrewList } from "./styled";

export const PeopleListSection = ({ headerContent, sectionContent }) => (
    <SectionStyled>
        <Header>{headerContent}</Header>
        <CastAndCrewList>{sectionContent}</CastAndCrewList>
    </SectionStyled>
);
