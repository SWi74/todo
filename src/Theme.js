import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    dark: "black",
    light: "white",
    grey: "lightgrey",

    lightbg:"#f9f9f9",
    lightbgalt:"#f2f2f2",

    primary: "#16697A",
    secondary: "#489FB5",
    tetrary: "#82C0CC",

    highlight: "rgba(255, 255, 255, 0.1)",
    shadow: "rgba(0, 0, 0, 0.1)",

    accent: "coral"
  },
  media: {
    second: "730px",
    third: "1136px"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme


