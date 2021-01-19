import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Noto Sans", sans-serif;
    color: ${props => props.theme.colors.dark};
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    background-color: ${props => props.theme.colors.lightbg};
  }
  ::-moz-focus-inner {
    border: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:focus {
    outline: none;
  }
  .neg {
    color: ${props => props.theme.colors.negative};
    font-weight: bold;
  }

  .pos {
    color: ${props => props.theme.colors.highlight};
    font-weight: bold;
  }

  .med {
    color: ${props => props.theme.colors.yellow};
    font-weight: bold;
  }
  .change {
    color: ${props => props.theme.colors.change};
    font-weight: bold;
  }
  .bold {
    font-weight: bold;
  }
`

export default GlobalStyle
