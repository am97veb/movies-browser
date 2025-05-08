import { SearchContainer, SearchInput, SearchWrapper } from "./styled";
import { nanoid } from "@reduxjs/toolkit";
import { LoupeSVG } from "./styled";
import { useQueryParameters, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import { newSearch } from "../../../features/people/personSlice";
import { useDispatch } from "react-redux";

export const Search = () => {
    const dispatch = useDispatch();
    const query = useQueryParameters(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
        dispatch(newSearch(target.value.trim()))
    }

    return (
        <SearchContainer>
            <SearchWrapper>
                <LoupeSVG />
                <SearchInput
                    id={nanoid()}
                    placeholder="Search for movies..."
                    value={query || ""}
                    onChange={onInputChange}
                >
                </SearchInput>
            </SearchWrapper>
        </SearchContainer>
    )
};