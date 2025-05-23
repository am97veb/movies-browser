import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MovieDescriptionTile } from "./DescriptionTile";
import { PeopleListSection } from "./ListSection";
import { PosterHeader } from "./PosterHeader";
import { MoviePageSection } from "./PosterHeader/styled";
import { PersonItem } from "../../../common/PersonItem";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import {
    getMovieDetails,
    selectCast,
    selectCrew,
    selectMovieDetails
} from "../moviesSlice";
import { movieGenres } from "../../../common/mapGenres";
import { mapNames } from "../../../common/mapNames";

export const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const cast = useSelector(selectCast);
    const crew = useSelector(selectCrew);
    const movie = useSelector(selectMovieDetails);

    useEffect(() => {
        dispatch(getMovieDetails(id));
    }, [dispatch, id])

    if (!movie || movie.id !== Number(id)) {
        return
    }

    return (
        <>
            <PosterHeader
                backdrop={movie.backdrop_path}
                title={movie.title}
                rating={movie.vote_average.toFixed(1)}
                votes={movie.vote_count}
            />
            <MoviePageSection>
                <MovieDescriptionTile
                    poster={movie.poster_path}
                    title={movie.title}
                    year={movie.release_date.split("-")[0]}
                    production={mapNames(movie.production_countries)}
                    releaseDate={movie.release_date}
                    genres={movieGenres(movie.genres)}
                    rating={movie.vote_average.toFixed(1)}
                    votes={movie.vote_count}
                    description={movie.overview}
                />
                {cast && cast.length !== 0 &&
                    < PeopleListSection
                        headerContent={"Cast"}
                        sectionContent={cast && cast.map(cast => (
                            <PersonItem
                                key={nanoid()}
                                id={cast.id}
                                image={cast.profile_path}
                                name={cast.name}
                                character={cast.character}
                            />
                        ))}
                    />
                }
                {crew && crew.length !== 0 &&
                    <PeopleListSection
                        headerContent={"Crew"}
                        sectionContent={crew && crew.map(crew => (
                            <PersonItem
                                key={nanoid()}
                                id={crew.id}
                                image={crew.profile_path}
                                name={crew.name}
                            />
                        ))}
                    />
                }
            </MoviePageSection>
        </>
    );
};

