import { Header, SectionStyled } from "./styled";

export const ListSection = ({ headerContent, sectionContent }) => (
    <SectionStyled>
        <Header>{headerContent}</Header>
        {sectionContent}
    </SectionStyled>
);
