import { useParams } from "react-router-dom";
import { DescriptionTile } from "./DescriptionTile";
import { ListSection } from "./ListSection";
import { PosterHeader } from "./PosterHeader";
import { MoviePageSection } from "./PosterHeader/styled";
import { PersonItem } from "../../../common/PersonItem";
import { movies } from "../../../common/Navigation/Search/SearchResult/moviesData";

export const MoviePage = () => {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === Number(id));



    return (
        <>
            <PosterHeader />
            <MoviePageSection>
                <DescriptionTile
                    title={movie.title}
                    year={movie.year}
                    poster={movie.image}
                    production={movie.production}
                    releaseDate={movie.releaseDate}
                    genres={movie.genres}
                    rating={movie.rating}
                    description={movie.description}
                />
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
};

