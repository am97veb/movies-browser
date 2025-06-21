import { useSelector } from "react-redux";
import { selectSearchStatus, selectQuery, selectSearchResult } from "../../../common/Navigation/Search/searchSlice";
import { MoviesList } from "../MoviesList";
import { Error } from "../../../common/Navigation/Search/Error";
import { Loading } from "../../../common/Navigation/Search/Loading";
import { NoResult } from "../../../common/Navigation/Search/NoResult";

export const Movies = () => {
    const searchStatus = useSelector(selectSearchStatus);
    const searchQuery = useSelector(selectQuery);
    const searchResult = useSelector(selectSearchResult);

    switch (searchStatus) {
        case "error":
            return <Error />;
        case "loading":
            return <Loading searchTerm={`Search results for “${searchQuery}”`} />
        case "success":
            if (searchResult.length === 0 && searchQuery !== "") {
                return <NoResult searchTerm={searchQuery} />
            }
            else {
                return <MoviesList />
            }
        default:
            return <MoviesList />
    }
}