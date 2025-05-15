import { useLocation, useNavigate } from "react-router-dom";

export const useQueryParameters = (searchQueryParamName) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    return query;
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const setQueryParam = ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        }
        else {
            searchParams.set(key, value)
        };
        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    };
    return setQueryParam;
};

export const usePlaceholder = () => {
    const location = useLocation();
    const path = location.pathname.replace(/^\/+/, "");
    const pathFirstSegment = path.split("/")[0];
    return pathFirstSegment;
};