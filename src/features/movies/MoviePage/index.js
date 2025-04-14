import { DescriptionTile } from "./DescriptionTile";
import { ListSection } from "./ListSection";
import { PosterHeader } from "./PosterHeader";
import { MoviePageSection } from "./PosterHeader/styled";

export const MoviePage = () => (
    <>
        <PosterHeader />
        <MoviePageSection>
            <DescriptionTile />
            <ListSection
                headerContent={"Cast"}
                sectionContent={""}
            />
            <ListSection
                headerContent={"Crew"}
                sectionContent={""}
            />
        </MoviePageSection>
    </>
);