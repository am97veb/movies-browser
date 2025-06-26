import { useDispatch, useSelector } from "react-redux";
import { StyledPagination, Button, StyledList, Text, Page, LeftArrow, RightArrow, Link, MobileRightArrow, MobileLeftArrow } from "./styled";
import { selectPage, nextPage, previousPage, firstPage, lastPage, selectTotalPages, contentType, selectContentType } from "../../common/Pagination/paginationSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Pagination = () => {
   const dispatch = useDispatch();
   const location = useLocation();
   const page = useSelector(selectPage);
   const totalPages = useSelector(selectTotalPages);
   const currentContentType = useSelector(selectContentType);

   useEffect(() => {
      const newContentType = (location.pathname.includes("movies") && location.search === "") || (location.pathname === "/" )
      ?
      "movies"
      :
      location.pathname.includes("people") && location.search === ""
         ?
         "people"
         :
         location.pathname.includes("movies") && location.search !== ""
            ?
            "searchedMovies"
            :
            location.pathname.includes("people") && location.search !== ""
               ?
               "searchedPeople"
               :
               location.pathname.includes(`movies/`)
                  ?
                  "movie"
                  :
                  location.pathname.includes(`people/`)
                     ?
                     "person"
                     :
                     null


      if (currentContentType !== newContentType) {
         dispatch(contentType(newContentType));
      }    

   }, [location.pathname, location, dispatch, currentContentType]);
  
   return (
   <StyledPagination>
      <StyledList>
         <Button disabled={page <= 1} >
            <Link onClick={() => page > 1 && dispatch(firstPage())}>
               <MobileLeftArrow disabled={page <= 1} />
               <LeftArrow disabled={page <= 1} />
               First
            </Link>
         </Button>
         <Button disabled={page <= 1}>
            <Link onClick={() => page > 1 && dispatch(previousPage())}>
               <LeftArrow disabled={page <= 1} />
               Previous
            </Link>
         </Button>
         <Text>
            Page<Page>{page}</Page>of<Page>{totalPages}</Page>
         </Text>
         <Button disabled={page >= totalPages}>
            <Link onClick={() => page < totalPages && dispatch(nextPage())}>
               Next
               <RightArrow disabled={page >= totalPages} />
            </Link>
         </Button>
         <Button disabled={page >= totalPages}>
            <Link onClick={() => page < totalPages && dispatch(lastPage())}>
               Last
               <RightArrow disabled={page >= totalPages} />
               <MobileRightArrow disabled={page >= totalPages} />
            </Link>
         </Button>
      </StyledList>
   </StyledPagination>
);
};