import { useEffect } from "react";
import { useDispatch } from "react-redux"

export const useClearData = ({ clear }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            if (typeof clear === 'function') {
                dispatch(clear());
            }
        };
    }, [dispatch, clear]);
}