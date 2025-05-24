import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-color: rgba(245, 245, 250, 1);
        font-family: 'Poppins', sans-serif;
        word-break: break-word;
    }

    button {
        cursor: pointer;
    }

    a:hover {
        cursor: pointer; 
    }
`;