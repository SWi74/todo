import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    dark: "#404040",
    light: "#f2f2f2",
    grey: "#ccc",
    accent: "lightgreen"
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


