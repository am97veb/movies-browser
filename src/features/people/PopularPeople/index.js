import { PersonItem } from "../../../common/PersonItem/index";
import { Wrapper, Header, PeopleList } from "./styled";


export const PopularPeople = () => (
    <Wrapper>
        <Header>
            Popular people
        </Header>
        <PeopleList>
            <PersonItem/>
        </PeopleList>
    </Wrapper>
)