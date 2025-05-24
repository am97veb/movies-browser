import { DescriptionTile } from "./DescriptionTile";
import { ListSection } from "./ListSection";
import { PersonPageSection } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
   selectCast,
   selectCrew,
   selectFetchPersonStatus,
   selectPerson,
   showPerson,
   clear
} from "./personSlice";
import MovieItem from "../../../common/MovieItem";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { mapGenres } from "../../../common/mapGenres";
import { selectGenres } from "../../movies/moviesSlice";
import { SwitchContent } from "../../../common/SwitchContent";
import { useClearData } from "../../../common/useClearData";

export const PersonPage = () => {
   const person = useSelector(selectPerson);
   const cast = useSelector(selectCast);
   const crew = useSelector(selectCrew);
   const dispatch = useDispatch();
   const { id } = useParams();
   const genresList = useSelector(selectGenres);
   const fetchPersonStatus = useSelector(selectFetchPersonStatus);

   useClearData({ clear });

   useEffect(() => {
      dispatch(showPerson(id));
   }, [dispatch, id])

   return (
      <PersonPageSection>
         <SwitchContent status={fetchPersonStatus}
            content={
               <>
                  <DescriptionTile
                     person={person}
                  />
                  {cast && cast.length !== 0 &&
                     <ListSection
                        headerContent={"Movies - cast"}
                        length={cast.length}
                        sectionContent={cast.map(cast => (
                           <MovieItem
                              key={nanoid()}
                              id={cast.id}
                              image={cast.poster_path}
                              title={cast.original_title}
                              character={cast.character}
                              year={cast.release_date}
                              genres={mapGenres(cast.genre_ids, genresList)}
                              rating={cast.vote_average.toFixed(1)}
                              votes={cast.vote_count}
                              
                           />
                        ))}
                     />
                  }
                  {crew && crew.length !== 0 &&
                     <ListSection
                        headerContent={"Movies - crew"}
                        length={crew.length}
                        sectionContent={crew.map(crew => (
                           <MovieItem
                              key={nanoid()}
                              id={crew.id}
                              image={crew.poster_path}
                              title={crew.original_title}
                              year={crew.release_date}
                              genres={mapGenres(crew.genre_ids, genresList)}
                              rating={crew.vote_average.toFixed(1)}
                              votes={crew.vote_count}
                               />
                        ))}
                     />
                  }
               </>
            }
         />
      </PersonPageSection>
   );
};

