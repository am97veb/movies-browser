import { Header, Wrapper, List } from "./styled";

export const ListSection = ({ headerContent, length, sectionContent }) => (
    <Wrapper>
        <Header>{headerContent} ({length})</Header>
        <List>{sectionContent}</List>
    </Wrapper>
);
