import { useParams } from "react-router-dom";
import { DescriptionTile } from "./DescriptionTile";
import { PeopleListSection } from "./ListSection";
import { PosterHeader } from "./PosterHeader";
import { MoviePageSection } from "./PosterHeader/styled";
import { PersonItem } from "../../../common/PersonItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import {
    selectMovies,
    selectGenres,
    getMovieDetails,
    selectCast,
    selectCrew,
    selectMovieDetails
} from "../moviesSlice";
import { mapGenres } from "../../../common/mapGenres";

export const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const genresList = useSelector(selectGenres);
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
                <DescriptionTile
                    poster={movie.poster_path}
                    title={movie.title}
                    year={movie.release_date.split("-")[0]}
                    production={movie.production}
                    releaseDate={movie.release_date}
                    genres={mapGenres(movie.genres, genresList)}
                    rating={movie.vote_average.toFixed(1)}
                    votes={movie.vote_count}
                    description={movie.overview}
                />
                <PeopleListSection
                    headerContent={"Cast"}
                    sectionContent={cast && cast.map(cast => (
                        <PersonItem
                            key={nanoid()}
                            id={cast.id}
                            image={cast.profile_path}
                            name={cast.name}
                        />
                    ))}
                />
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
            </MoviePageSection>
        </>
    );
};

