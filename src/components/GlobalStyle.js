import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        margin: 0;
        padding: 0;
    }
    body{
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle