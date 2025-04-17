import { DescriptionTile } from "./DescriptionTile";
import { ListSection } from "./ListSection";
import { PosterHeader } from "./PosterHeader";
import { MoviePageSection } from "./PosterHeader/styled";
import { PersonItem } from "../../../common/PersonItem";

export const MoviePage = () => (
    <>
        <PosterHeader />
        <MoviePageSection>
            <DescriptionTile />
            <ListSection
                headerContent={"Cast"}
                sectionContent={<PersonItem />}
            />
            <ListSection
                headerContent={"Crew"}
                sectionContent={<PersonItem />}
            />
        </MoviePageSection>
    </>
);