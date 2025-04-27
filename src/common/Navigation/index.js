import { Search } from "./Search";
import { NavWrapper, StyledNav } from "./styled";
import { NavigationBar } from "./NavBar";

export const Navigation = () => (
    <StyledNav>
        <NavWrapper>
            <NavigationBar />
            <Search />
        </NavWrapper>
    </StyledNav>
);