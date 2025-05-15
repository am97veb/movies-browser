import { useSelector } from "react-redux";
import { selectSearchStatus, selectQuery } from "../../people/searchSlice";
import MovieList from "../MovieList";
import Error from "../../../common/Navigation/Search/Error";
import Loading from "../../../common/Navigation/Search/Loading";
import { selectSearchResult } from "../../people/searchSlice";
import NoResult from "../../../common/Navigation/Search/NoResult";

export const Movies = () => {
    const searchStatus = useSelector(selectSearchStatus);
    const searchQuery = useSelector(selectQuery);
    const searchResult = useSelector(selectSearchResult);


    switch (searchStatus) {
        case "idle":
            return <MovieList />
        case "error":
            return <Error />;
        case "loading":
            return <Loading searchTerm={searchQuery} />
        case "success":
            if (searchResult.length === 0 && searchQuery !== "") {
                return <NoResult searchTerm={searchQuery} />
            }
            else {
                return <MovieList />
            }
        default:
            return <MovieList />
    }

}