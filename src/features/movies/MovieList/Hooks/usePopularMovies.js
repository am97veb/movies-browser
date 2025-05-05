import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const usePopularMovies = (genresMap) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await response.json();

        if (Array.isArray(data.results)) {
          const mappedMovies = data.results.map((movie) => ({
            id: movie.id,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            title: movie.title,
            year: movie.release_date?.split("-")[0],
            genres: movie.genre_ids.map((id) => genresMap[id]).filter(Boolean),
            rating: movie.vote_average.toFixed(1),
            votes: movie.vote_count,
          }));
          setMovies(mappedMovies);
        } else {
          console.error("Movies not found in response:", data);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (Object.keys(genresMap).length > 0) {
      fetchMovies();
    }
  }, [genresMap]);

  return movies;
};

export default usePopularMovies;

