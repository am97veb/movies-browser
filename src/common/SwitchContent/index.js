import Error from "../Navigation/Search/Error";
import Loading from "../Navigation/Search/Loading"

export const SwitchContent = ({status, content}) => {
    switch (status) {
        case "idle":
            return content;
            
        case "loading":
            return <Loading />;

        case "error":
            return <Error />;

        case "success":
           return content;

        default:
            return content;
    }
}