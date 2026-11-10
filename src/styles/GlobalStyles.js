import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) => theme.typography.fontFamily };
        background: ${({ theme }) => theme.colors.background };
        color: ${({ theme }) => theme.colors.textPrimary };
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; 
    }

`;