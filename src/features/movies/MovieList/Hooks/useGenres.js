import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
console.log("TMDB API KEY:", API_KEY);

const useGenres = () => {
  const [genresMap, setGenresMap] = useState({});

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();

        if (Array.isArray(data.genres)) {
          const genreMap = {};
          data.genres.forEach((genre) => {
            genreMap[genre.id] = genre.name;
          });
          setGenresMap(genreMap);
        } else {
          console.error("Genres not found in response:", data);
        }
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  return genresMap;
};

export default useGenres;
