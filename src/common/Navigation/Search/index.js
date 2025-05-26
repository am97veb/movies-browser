import { useState } from "react";
import { SearchContainer, SearchInput, SearchWrapper } from "./styled";
import debounce from "lodash/debounce";
import { nanoid } from "@reduxjs/toolkit";
import { LoupeSVG } from "./styled";
import { usePlaceholder, useQueryParameters, useReplaceQueryParameter } from "./queryParameters";
import searchQueryParamName from "./searchQueryParamName";
import { clearSearch, newSearch } from "./searchSlice";
import { useDispatch } from "react-redux";
import { showPeople } from "../../../features/people/peopleSlice";
import { contentType } from "../../Pagination/paginationSlice";
import { showMovies } from "../../../features/movies/moviesSlice";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
    const dispatch = useDispatch();
    const query = useQueryParameters(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const placeholder = usePlaceholder();
    const placeholderText = placeholder === "movies" ? "movies" : "people";
    const [inputValue, setInputValue] = useState(query || "");
    const navigate = useNavigate();

    const debouncedSearch = useRef(
        debounce((trimmedValue, placeholder) => {
            if (trimmedValue) {
                dispatch(contentType(placeholder === "people" ? "person" : "movie"));
                dispatch(newSearch({ trimmedValue, placeholder }));
            } else {
                if (placeholder === "people") {
                    dispatch(showPeople());
                } else {
                    dispatch(showMovies());
                }
            }
        }, 500)
    ).current;

    const onInputChange = ({ target }) => {
        const value = target.value;
        setInputValue(value);

        replaceQueryParameter({
            key: searchQueryParamName,
            value: value !== "" ? value : undefined,
        });

        const trimmedValue = value.trim();

        navigate(
            placeholder === "people"
                ? trimmedValue ? `/people?search=${trimmedValue}` : "/people"
                : trimmedValue ? `/movies?search=${trimmedValue}` : "/movies"
        );

        debouncedSearch(trimmedValue, placeholder);
    };

    useEffect(() => {
        setInputValue(query || "");

        if (!query?.trim()) {
            dispatch(clearSearch());
        }
    }, [query]);

    return (
        <SearchContainer>
            <SearchWrapper>
                <LoupeSVG />
                <SearchInput
                    id={nanoid()}
                    placeholder={`Search for ${placeholderText}...`}
                    value={inputValue}
                    onChange={onInputChange}
                >
                </SearchInput>
            </SearchWrapper>
        </SearchContainer>
    )
};