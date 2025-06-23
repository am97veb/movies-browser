import { useSelector } from "react-redux";
import { Loading } from "../../../common/Navigation/Search/Loading";
import { Error } from "../../../common/Navigation/Search/Error";
import { PopularPeopleList } from "../PopularPeopleList";
import { selectQuery, selectSearchResult, selectSearchStatus } from "../../../common/Navigation/Search/searchSlice";
import { NoResult } from "../../../common/Navigation/Search/NoResult";

export const People = () => {
    const searchStatus = useSelector(selectSearchStatus);
    const searchQuery = useSelector(selectQuery);
    const searchResult = useSelector(selectSearchResult);
    const totalResult = searchResult.length;

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
                return <PopularPeopleList searchTerm={`Search results for “${searchQuery}” (${totalResult})`}/>
            }
        default:
            return <PopularPeopleList />
    }
};