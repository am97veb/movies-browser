import { useSelector } from "react-redux";
import Loading from "../../../common/Navigation/Search/Loading";
import Error from "../../../common/Navigation/Search/Error";
import { PopularPeople } from "../PopularPeople";
import { selectPeopleStatus } from "../peopleSlice";
import { selectQuery, selectSearchResult, selectSearchStatus } from "../searchSlice";
import NoResult from "../../../common/Navigation/Search/NoResult";

export const People = () => {
    const peopleStatus = useSelector(selectPeopleStatus);
    const searchStatus = useSelector(selectSearchStatus);
    const searchQuery = useSelector(selectQuery);
    const searchResult = useSelector(selectSearchResult);

    switch (peopleStatus) {
        case "error":
            return <Error />;
        case "success":
            if (searchStatus === "loading") {
                return <Loading searchTerm={searchQuery} />
            }
            else if (searchQuery !== ""
                && searchStatus === "success"
                && searchResult.results.length === 0) {
                return <NoResult searchTerm={searchQuery} />
            }
            return <PopularPeople />
        default:
            return <Loading />
    }
};