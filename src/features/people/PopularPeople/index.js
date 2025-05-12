import { useSelector } from "react-redux";
import { PersonItem } from "../../../common/PersonItem/index";
import { Wrapper, Header, PeopleList } from "./styled";
import { selectPeople } from "../peopleSlice";
import { Pagination } from "../../../common/Pagination";

export const PopularPeople = () => {
    const people = useSelector(selectPeople);

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