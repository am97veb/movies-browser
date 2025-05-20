
export const mapGenres = (genre_ids, genresList) => {
    return genre_ids.map((id) => {
        const genre = genresList.find((g) => g.id === id);
        return genre ? genre.name : "Unknown";
    });
};

export const movieGenres = (genres) => {
    const genresMapped = genres.map((genre) => genre.name);
    return (genresMapped);
};