import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    height: 100%;
    background: ${props => props.theme.colors.primaryOne};
    color: ${props => props.theme.colors.primaryTwo};
    cursor: default;
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }

  a {
    color: ${({ theme }) => theme.colors.primaryTwo};
    text-decoration: none;
  }
`
