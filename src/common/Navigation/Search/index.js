import { SearchContainer, SearchInput, SearchWrapper } from "./styled";
import { nanoid } from "@reduxjs/toolkit";
import { LoupeSVG } from "./styled";
import { usePlaceholder, useQueryParameters, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import { newSearch } from "../../../features/people/searchSlice";
import { useDispatch } from "react-redux";
import { showPeople } from "../../../features/people/peopleSlice";

export const Search = () => {
    const dispatch = useDispatch();
    const query = useQueryParameters(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const placeholder = usePlaceholder();
    const placeholderText = placeholder === "movies" ? "movies" : "people";

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });

        if (target.value.trim() !== "") {
            dispatch(newSearch(target.value.trim()))
        } else {
            dispatch(showPeople());
        };
    }

    return (
        <SearchContainer>
            <SearchWrapper>
                <LoupeSVG />
                <SearchInput
                    id={nanoid()}
                    placeholder={`Search for ${placeholderText}...`}
                    value={query || ""}
                    onChange={onInputChange}
                >
                </SearchInput>
            </SearchWrapper>
        </SearchContainer>
    )
};