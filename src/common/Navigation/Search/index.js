import { SearchContainer, SearchInput, SearchWrapper } from "./styled";
import { nanoid } from "@reduxjs/toolkit";
import { LoupeSVG } from "./styled";

export const Search = () => {

    return (
        <SearchContainer>
            <SearchWrapper>
                <LoupeSVG />
                <SearchInput
                    id={nanoid()}
                    placeholder="Search for movies..."
                >
                </SearchInput>
            </SearchWrapper>
        </SearchContainer>
    )
};