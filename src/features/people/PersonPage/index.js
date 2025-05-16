import { DescriptionTile } from "./DescriptionTile";
import { ListSection } from "./ListSection";
import { PersonPageSection } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectCast, selectCrew, selectPerson, showPerson } from "./personSlice";
import MovieItem from "../../../common/MovieItem";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

export const PersonPage = () => {
    const person = useSelector(selectPerson);
    const cast = useSelector(selectCast);
    const crew = useSelector(selectCrew);
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        dispatch(showPerson(id));
    }, [dispatch, id])

    return (
        <PersonPageSection>
            <DescriptionTile
                person={person}
            />
            {cast && cast.length !== 0 &&
                <ListSection
                    headerContent={"Movies - cast"}
                    length={cast.length}
                    sectionContent={cast.map(cast => (
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
            }
            {crew && crew.length !== 0 &&
                <ListSection
                    headerContent={"Movies - crew"}
                    length={crew.length}
                    sectionContent={crew.map(crew => (
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
            }
        </PersonPageSection>
    );
};

