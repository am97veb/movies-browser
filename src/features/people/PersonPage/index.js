import { DescriptionTile } from "./DescriptionTile";
import { ListSection } from "./ListSection";
import { PersonPageSection } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectCast, selectCrew, selectPerson, showPerson } from "./personSlice";
import MovieItem from "../../movies/MovieItem";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const PersonPage = () => {
    const person = useSelector(selectPerson);
    const cast = useSelector(selectCast);
    const crew = useSelector(selectCrew);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const idFromPathname = location.pathname.slice(8);
        dispatch(showPerson(idFromPathname));
    }, [location.pathname])

    return (
        <PersonPageSection>
            <DescriptionTile
                person={person}
            />
            <ListSection
                headerContent={"Movies - cast"}
                length={cast && cast.length}
                sectionContent={cast && cast.map(cast => (
                    <MovieItem
                        key={cast.id}
                        image={`https://image.tmdb.org/t/p/w500${cast.poster_path}`}
                        title={cast.original_title}
                        character={cast.character}
                        year={cast.release_date}
                        genres={cast.genres}
                        rating={cast.rating}
                        votes={cast.vote_average} />
                ))}
            />
            <ListSection
                headerContent={"Movies - crew"}
                length={crew && crew.length}
                sectionContent={crew && crew.map(crew => (
                    <MovieItem
                        key={crew.id}
                        image={`https://image.tmdb.org/t/p/w500${crew.poster_path}`}
                        title={crew.original_title}
                        year={crew.release_date}
                        genres={crew.genres}
                        rating={crew.rating}
                        votes={crew.vote_average} />
                ))}
            />
        </PersonPageSection>
    );
};

