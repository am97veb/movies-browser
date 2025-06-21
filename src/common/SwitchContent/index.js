import { Error } from "../Navigation/Search/Error";
import { Loading } from "../Navigation/Search/Loading"

export const SwitchContent = ({ status, content }) => {
    switch (status) {
        case "loading":
            return <Loading />;

        case "error":
            return <Error />;
        default:
            return content;
    }
}