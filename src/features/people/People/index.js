import { useSelector } from "react-redux";
import Loading from "../../../common/Navigation/Search/Loading";
import Error from "../../../common/Navigation/Search/Error";
import { PopularPeople } from "../PopularPeople";
import { selectQuery, selectSearchResult, selectSearchStatus } from "../searchSlice";
import NoResult from "../../../common/Navigation/Search/NoResult";

export const People = () => {
    const searchStatus = useSelector(selectSearchStatus);
    const searchQuery = useSelector(selectQuery);
    const searchResult = useSelector(selectSearchResult);

    switch (searchStatus) {
        case "idle":
            return <PopularPeople />
        case "error":
            return <Error />;
        case "loading":
            return <Loading searchTerm={searchQuery} />
        case "success":
            if (searchResult.length === 0 && searchQuery !== "") {
                return <NoResult searchTerm={searchQuery} />
            }
            else {
                return <PopularPeople />
            }
        default:
            return <PopularPeople />
    }
};