import { useSelector } from "react-redux";
import Loading from "../../../common/Navigation/Search/Loading";
import Error from "../../../common/Navigation/Search/Error";
import { PopularPeopleList } from "../PopularPeopleList";
import { selectQuery, selectSearchResult, selectSearchStatus } from "../searchSlice";
import NoResult from "../../../common/Navigation/Search/NoResult";

export const People = () => {
    const searchStatus = useSelector(selectSearchStatus);
    const searchQuery = useSelector(selectQuery);
    const searchResult = useSelector(selectSearchResult);

    switch (searchStatus) {
        case "idle":
            return <PopularPeopleList />
        case "error":
            return <Error />;
        case "loading":
            return <Loading searchTerm={`Search results for “${searchQuery}”`} />
        case "success":
            if (searchResult.length === 0 && searchQuery !== "") {
                return <NoResult searchTerm={searchQuery} />
            }
            else {
                return <PopularPeopleList />
            }
        default:
            return <PopularPeopleList />
    }
};