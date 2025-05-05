import { useDispatch, useSelector } from "react-redux";
import { StyledPagination, Button, StyledList, Text, Page, LeftArrow, RightArrow, Link } from "./styled";
import { selectPage, nextPage, previousPage, firstPage, lastPage, selectTotalPages } from "../../features/people/peopleSlice";

export const Pagination = () => {
   const dispatch = useDispatch();
   const page = useSelector(selectPage);
   const totalPages = useSelector(selectTotalPages);

   return (
      <StyledPagination>
         <StyledList>
            <Button disabled={page <= 1} >
               <Link onClick={() => page > 1 && dispatch(firstPage())}>
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
               </Link>
            </Button>
         </StyledList>
      </StyledPagination>
   );
};