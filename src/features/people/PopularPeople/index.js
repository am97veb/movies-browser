import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PersonItem } from "../../../common/PersonItem/index";
import { Wrapper, Header, PeopleList } from "./styled";
import { selectPeople } from "../peopleSlice";
import { Pagination } from "../../../common/Pagination";
import { useQueryParameters } from "../../../common/Navigation/Search/queryParameters";
import searchQueryParamName from "../../../common/Navigation/Search/searchQueryParamName";
import { selectSearchResult, selectSearchStatus } from "../searchSlice";
import { selectQuery } from "../searchSlice";
import { selectPage } from "../../../common/Pagination/paginationSlice";

export const PopularPeople = () => {
    const status = useSelector(selectSearchStatus);
    const query = useQueryParameters(searchQueryParamName);
    const sliceQuery = useSelector(selectQuery);
    const page = useSelector(selectPage);


    const people = useSelector(state =>
        (query?.trim() && query === sliceQuery)
            ? selectSearchResult(state)
            : selectPeople(state));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page])

    return (
        <Wrapper>
            <Header>
                Popular people
            </Header>
            <PeopleList>
                {Array.isArray(people) &&
                    people.map(person => (
                        <PersonItem
                            key={person.id}
                            id={person.id}
                            image={person.profile_path}
                            name={person.name}
                        />
                    ))
                }
            </PeopleList>
            <Pagination />
        </Wrapper>
    )
}