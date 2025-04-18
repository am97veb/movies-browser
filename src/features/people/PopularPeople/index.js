import { useSelector } from "react-redux";
import { PersonItem } from "../../../common/PersonItem/index";
import { Wrapper, Header, PeopleList } from "./styled";
import { selectPeople } from "../peopleSlice";

export const PopularPeople = () => {
    const people = useSelector(selectPeople);

    return (
        <Wrapper>
            <Header>
                Popular people
            </Header>
            <PeopleList>
                {people.map(person =>
                    <PersonItem
                        person={person}
                    />
                )}
            </PeopleList>
        </Wrapper>
    )
}