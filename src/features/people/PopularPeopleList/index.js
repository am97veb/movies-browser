import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PersonItem } from "../../../common/PersonItem/index";
import { Wrapper, Header, PeopleList } from "./styled";
import { clear, selectPeople, selectPeopleStatus } from "../peopleSlice";
import { Pagination } from "../../../common/Pagination";
import { useQueryParameters, useReplaceQueryParameter } from "../../../common/Navigation/Search/queryParameters";
import searchQueryParamName from "../../../common/Navigation/Search/searchQueryParamName";
import { selectSearchResult, selectQuery, selectSearchStatus } from "../../../common/Navigation/Search/searchSlice";
import { selectContentType, selectPage, setPage } from "../../../common/Pagination/paginationSlice";
import { SwitchContent } from "../../../common/SwitchContent";
import { useClearData } from "../../../common/useClearData";

export const PopularPeopleList = ({ searchTerm }) => {

   const sliceQuery = useSelector(selectQuery);
   const page = useSelector(selectPage);
   const dispatch = useDispatch();
   const query = useQueryParameters(searchQueryParamName);
   const setUrl = useReplaceQueryParameter();
   const pageFromUrl = useQueryParameters("page");

   const fetchStatus = useSelector(state =>
      (query?.trim() && query === sliceQuery)
         ? selectSearchStatus(state)
         : selectPeopleStatus(state));

   const people = useSelector(state =>
      (query?.trim() && query === sliceQuery)
         ? selectSearchResult(state)
         : selectPeople(state));

   useEffect(() => {
      const pageFromUrlToNumber = pageFromUrl ? parseInt(pageFromUrl) : 1;

      if (page !== pageFromUrlToNumber) {
         dispatch(setPage(pageFromUrlToNumber));
      }
   }, [pageFromUrl, dispatch])

   useEffect(() => {
      window.scrollTo(0, 0);
      page > 1 &&
         setUrl({
            key: "page",
            value: page,
         });
   }, [page])

   useClearData({ clear });

   return (
      <SwitchContent
         status={fetchStatus}
         content={
            <Wrapper>
               <Header>
                  {searchTerm || "Popular People"}
               </Header>
               <PeopleList>
                  {Array.isArray(people) &&
                     people.map(person => (
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
         }
      />
   )
}