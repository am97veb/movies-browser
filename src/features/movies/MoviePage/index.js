import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DescriptionTile } from "./DescriptionTile";
import { ListSection } from "./ListSection";
import { PosterHeader } from "./PosterHeader";
import { MoviePageSection } from "./PosterHeader/styled";
import { PersonItem } from "../../../common/PersonItem";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return null; 

  return (
    <>
      <PosterHeader />
      <MoviePageSection>
        <DescriptionTile
          title={movie.title}
          year={movie.release_date?.split("-")[0]}
          poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          production={movie.production_countries?.[0]?.name}
          releaseDate={movie.release_date}
          genres={movie.genres?.map((g) => g.name)}
          rating={movie.vote_average.toFixed(1)}
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

