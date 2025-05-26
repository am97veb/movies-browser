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
   selectFetchMovieDetailsStatus,
   selectMovieDetails,
   clear,
} from "./movieDetailsSlice";
import { movieGenres } from "../../../common/mapGenres";
import { mapNames } from "../../../common/mapNames";
import { SwitchContent } from "../../../common/SwitchContent";
import { useClearData } from "../../../common/useClearData";
import { dateFormatter, onlyYear } from "../../../common/dateFormatter";

export const MoviePage = () => {
   const dispatch = useDispatch();
   const { id } = useParams();
   const cast = useSelector(selectCast);
   const crew = useSelector(selectCrew);
   const movie = useSelector(selectMovieDetails);
   const fetchStatus = useSelector(selectFetchMovieDetailsStatus);
   console.log(cast)

   useClearData({ clear });

   useEffect(() => {
      dispatch(getMovieDetails(id));
   }, [dispatch, id])

   return (
      <div>
         <SwitchContent status={fetchStatus}
            content={
               <>
                  <PosterHeader
                     backdrop={movie.backdrop_path}
                     title={movie.title}
                     rating={movie.vote_average && movie.vote_average.toFixed(1)}
                     votes={movie.vote_count}
                  />
                  <MoviePageSection>
                     <MovieDescriptionTile
                        poster={movie.poster_path}
                        title={movie.title}
                        year={onlyYear(movie.release_date)}
                        production={movie.production_countries && mapNames(movie.production_countries)}
                        releaseDate={dateFormatter(movie.release_date)}
                        genres={movie.genres && movieGenres(movie.genres)}
                        rating={movie.vote_average && movie.vote_average.toFixed(1)}
                        votes={movie.vote_count}
                        description={movie.overview}
                     />
                     {cast && cast.length !== 0 &&
                        <PeopleListSection
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
                                 department={crew.department}
                              />
                           ))}
                        />
                     }

                  </MoviePageSection>
               </>
            } />

      </div>
   );
};

