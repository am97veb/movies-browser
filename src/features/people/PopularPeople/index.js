import { useSelector } from "react-redux";
import { PersonItem } from "../../../common/PersonItem/index";
import { Wrapper, Header, PeopleList } from "./styled";
import { selectPeople } from "../peopleSlice";
import { Pagination } from "../../../common/Pagination";
import { useQueryParameters } from "../../../common/Navigation/Search/queryParameters";
import searchQueryParamName from "../../../common/Navigation/Search/searchQueryParamName";
import { selectSearchResult, selectSearchStatus } from "../searchSlice";

export const PopularPeople = () => {
    const query = useQueryParameters(searchQueryParamName);
    const people = useSelector(state =>
        query?.trim()
            ? selectSearchResult(state)
            : selectPeople(state));

    return (
        <Wrapper>
            <Header>
                Popular people
            </Header>
            <PeopleList>
                {people.results &&
                    people.results.map(person => (
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