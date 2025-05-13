import { useParams } from "react-router-dom";
import { DescriptionTile } from "./DescriptionTile";
import { ListSection } from "./ListSection";
import { PosterHeader } from "./PosterHeader";
import { MoviePageSection } from "./PosterHeader/styled";
import { PersonItem } from "../../../common/PersonItem";
import { useSelector } from "react-redux";
import { selectMovies } from "../moviesSlice";
import { selectGenres } from "../moviesSlice";

export const MoviePage = () => {
    const { id } = useParams();
    const movies = useSelector(selectMovies);
    const movie = movies.find(movie => movie.id === Number(id));
    console.log(movie);
    console.log(movie.release_date);
    const genresList = useSelector(selectGenres);


    const mapGenres = (genre_ids) => {
        return genre_ids.map((id) => {
            const genre = genresList.find((g) => g.id === id);
            return genre ? genre.name : "Unknown";
        });
    };


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
                    genres={mapGenres(movie.genre_ids)}
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                    description={movie.overview}
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

