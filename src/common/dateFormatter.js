export const dateFormatter = (date) =>
    new Date(date).
        toLocaleDateString(undefined, {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"  
        });


export const onlyYear = (date) =>
    new Date(date).
        toLocaleDateString(undefined, {
            year: "numeric"
        });